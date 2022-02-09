// 封装一个fetch方法 挂载至$app.$def上
import { IPlugin } from '@/utils/plugins'

export function fetch(opts) {}

export class FetchPlugin:IPlugin {
  apply(grobalThis): void {
    globalThis.fetch = (opts) => {
      return fetch(opts)
    }
  }
}
