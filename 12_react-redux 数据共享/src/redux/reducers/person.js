import { ADD_PERSON } from '../constant';

const initState = [{ username: 'shadow', password: '12345' }];
export default function personReducer(preState = initState, action) {
  const { type, person } = action;
  switch (type) {
    case ADD_PERSON:
      //这边不能用unshift返回preState  redux比较的话只会比较preState的地址值
      //一样的就不更新
      /**
       * 1. 删掉最后一个元素
       * return data.slice(0, -1);  slice 会返回新数组，不会改动 data 本身。
       *
       * 2. 按索引删除
       * return data.filter((_, index) => index !== i);
       *
       * 3. 按条件删除（比如删掉所有 {a:1} 的元素）
       * return data.filter(item => item.a !== 1);
       *
       * 4.用在 useState
       * setData(prev => prev.filter(item => item.a !== 1));
       *
       * 👉 总结：
       *     filter / slice / map 都是纯函数，不会改原数组。
       *    pop / splice / push 这类会直接修改原数组，所以在 React 里不要用。
       *
       *
       * 1️⃣ 按条件修改
       *    return data.map(item =>
       *         item.a === 1 ? { ...item, a: 100 } : item
       *     );
       *
       * 2️⃣ 按索引修改
       *  return data.map((item, index) =>
       *     index === i ? { ...item, a: 100 } : item
       *     );
       *
       * 3️⃣ 在 useState 里用
       *  setData(prev =>
       *     prev.map(item =>
       *         item.id === targetId ? { ...item, value: newValue } : item
       *     )
       *     );
       *
       *  👉 总结：
       *     map 是修改数组里某个元素的最常见方法。
       *     注意一定要 ...item 拷贝展开，避免直接改原对象。
       */
      return [person, ...preState];
    default:
      return preState;
  }
}
