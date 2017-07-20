import request from 'lib/request'

export function getAppList({ dId }: any) {
  const opts = {
    method: 'POST',
    body: { dId }
  }
  return request(['webapi', 'dev'], 'App.GetMyApplist', opts)
    .then(res => res.json())
}
