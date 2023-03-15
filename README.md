### React Typescript Counter-App
  리액트로 작성한 카운터 앱으로, 리덕스를 이해하기 위해 작성한 예제입니다.
  기존과는 달리 타입스크립트까지 적용하여 작성하였습니다.

- #### Reducer
- #### Action Type
- #### CombineReducers  
  combineReducers란 서로 다른 reducer 함수들을 값으로 가지는 객체를 받아서 store(createStore)에 넘길 수 있는 하나의 reducer 함수로 바꾸어줍니다.
- #### Store
- #### Store.Dispatch 
- #### Provider  
  저장소에 액세스해야하는 모든 중첩구성 요소에서 Redux Store 저장소를 사용 할 수 있도록 해줍니다.
- #### useSelector
  Hooks를 이용해서 스토어의 값을 가져올 수 있습니다.
  ```jsx
  import { useSelector } from "react-redux/es/exports";
  const counter = useSelector((state) => state.counter)
  ```
- #### Redux MiddelWare  
  미들웨어는 액션을 disptch 전달하고 리듀서에 도달하는 순간 사이에 사전에 지정된 작업을 실행할 수 있게 해주는 중간자입니다.
  로깅, 충돌보고, 비동기API의 통신, 라우팅 등을 위해 리덕스 미들웨어를 사용합니다.
- #### Redux Thunk  
  리덕스를 사용하는 앱에서 비동기 작업을 할 때 많이 사용하는 방법이 Redux-Thunk,입니다. 이것또한 logger MiddleWare처럼 리덕스 미들웨어입니다.
  - #### Thuk의 의미:  
    "thunk"라는 단어는 일부 지연된 작업을 수행하는 코드 조각을 의미하는 프로그래밍 용어입니다. 지금 일부 논리(로직)를 실행하는 대신 나중에 작업을 수행하는 데 사용할 수 있는 함수 본문이나 코드를 작성할 수 있습니다.
    ```jsx
    // calculation of 1 + 2 is immediate
    // x === 3
    let x = 1 + 2

    // calculation of 1 + 2 is delayed
    // foo can be called later to perform the calculation
    // foo is a thunk!
    let foo = () => 1 + 2
    ```

    
#### npm installs
- 리덕스 사용을 위한 라이브러리 설치  
  $ npm install redux --save
- 리덕스 Provider 사용을 위한 라이브러리 설치  
  $ npm install react-redux --save  
- 비동기 작업(Redux Thunk)를 하기 위해 라이브러리 설치  
  $ npm install axios --save  
- dispatch 할 때, 함수를 할당 할 수 없어 Redux Thunk를 사용하여 허용케 하기 위해 라이브러리 설치  
  $ npm install redux-thunk --save