import { http, HttpResponse, delay } from 'msw'
import { setupServer } from 'msw/node'
import { fireEvent, screen } from '@testing-library/react'
import { renderWithProviders } from '../../src/utils/testUtils/renderWithProviders'
import Home from '../../src/pages/Home'

// 攔截 https://randomuser.me/api/ 請求，回傳符合 userAPI 處理格式的 mock 結構
const handlers = [
  http.get('https://randomuser.me/api/', async () => {
    await delay(150)
    return HttpResponse.json({
      results: [
        {
          name: { first: 'John', last: 'Smith' },
        },
      ],
    })
  }),
]

const server = setupServer(...handlers)

// 啟用 API mocking
beforeAll(() => server.listen())
// 測試後重設 handler
afterEach(() => server.resetHandlers())
// 測試結束關閉 server
afterAll(() => server.close())

test('fetches & receives a user after clicking the fetch user button', async () => {
  renderWithProviders(<Home />)

  // 初始狀態：顯示 no user，且未在 loading
  expect(screen.getByText(/no user/i)).toBeInTheDocument()
  expect(screen.queryByText(/Fetching user\.{3}/i)).not.toBeInTheDocument()

  // 點擊 Fetch user 按鈕，顯示 loading
  fireEvent.click(screen.getByRole('button', { name: /fetch user/i }))
  expect(screen.queryByText(/no user/i)).toBeInTheDocument()
  expect(screen.getByText(/Fetching user\.{3}/i)).toBeInTheDocument()

  // 等待 API 回應，顯示 John Smith
  expect(await screen.findByText(/John Smith/i)).toBeInTheDocument()
  expect(screen.queryByText(/no user/i)).not.toBeInTheDocument()
  expect(screen.queryByText(/Fetching user\.{3}/i)).not.toBeInTheDocument()
})
