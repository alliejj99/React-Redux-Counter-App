### React Typescript Counter-App
  리액트로 작성한 카운터 앱으로, 리덕스를 이해하기 위해 작성한 예제입니다.
  기존과는 달리 타입스크립트까지 적용하여 작성하였습니다.

- Reducer
- Action Type
- CombineReducers
  combineReducers란 서로 다른 reducer 함수들을 값으로 가지는 객체를 받아서 store(createStore)에 넘길 수 있는 하나의 reducer 함수로 바꾸어줍니다.
- Store
- Store.Dispatch 
- Provider
  저장소에 액세스해야하는 모든 중첩구성 요소에서 Redux Store 저장소를 사용 할 수 있도록 해줍니다.


#### npm installs
- 리덕스 사용을 위한 라이브러리 설치
  $ npm install redux --save
- 리덕스 Provider 사용을 위한 라이브러리 설치
  $ npm install react-redux --save  