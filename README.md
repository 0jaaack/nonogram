# 네모네모 로직

[노노그램](https://ko.wikipedia.org/wiki/%EB%85%B8%EB%85%B8%EA%B7%B8%EB%9E%A8)(Nonogram, 네모네모 로직)은 규칙에 맞게 빈 칸을 채워 그림을 그려나가는 퍼즐 게임입니다. 퍼즐의 각 열과 행은 숫자의 패턴이 있습니다. 숫자의 패턴에 맞게 그림을 완성해나가야 합니다.

`React`의 클래스형 컴포넌트로 작성한 프로젝트입니다. 클래스형 컴포넌트의 라이프 사이클과 hoc 등을 학습하였습니다. `Redux-toolkit`이 아닌 `Redux`와 `React-Redux`를 활용하여, 예전 `React`와 `Redux`의 개발 환경을 느껴볼 수 있었습니다.

[배포 사이트](https://cute-khapse-ad3f02.netlify.app/)

# Table of contents

- [Introduction](#introduction)
- [Class Component](#class-component)
    - [함수형 컴포넌트와의 차이](#함수형-컴포넌트와의-차이)
    - [HOC 적용](#hoc-적용)
- [고민했던 점](#고민했던-점)
    - [이벤트 위임을 통한 최적화](#이벤트-위임을-통한-최적화)
    - [마우스 이벤트 처리](#마우스-이벤트-처리)
    - [라인 완료 / 퍼즐 완료 감지](#라인-완료--퍼즐-완료-감지)

# Introduction

- 프로젝트 기간: 2023.01.23 ~ 2023.01.26.(4일)
- 기술 스택: `React`, `Redux`, `TailwindCSS`, `React-Router-Dom`, `Redux-Persist`
- 배포: `Netlify`

# Class Component

클래스형 컴포넌트는 자바스크립트 ES6의 클래스 문법으로 정의할 수 있는 컴포넌트입니다. 리액트를 처음 배울 때부터 쭉 함수형 컴포넌트 방식을 사용해왔는데요. 리액트에서 더 근간이 되는 방식인 클래스형 컴포넌트를 학습하고 이해하기 위해 이번 프로젝트를 진행해보았습니다.

### 함수형 컴포넌트와의 차이

- 개발하는 사고 방식의 차이
    
    함수형 컴포넌트는 hook을 기반으로 개발 프로세스가 진행되는 반면, 클래스형 컴포넌트는 라이프 사이클 메소드로 진행된다는 차이가 있었습니다. 물론 hook에도 라이프사이클 메소드들을 대체할 수 있는 방식이 있지만, 개발을 할 때 사고하는 방식에서 주요한 차이를 느꼈습니다. 
    
    라이프 사이클 메소드들은 함수의 동작 시점을 설정해줄 수 있는 면에서 분명 좋았지만, hook의 간편함이 그립기도 했습니다. 복잡한 비즈니스 로직들을 custom hook으로 만들어 간단하게 작성해줄 수 있는 편리함이 있었는데, 클래스형 컴포넌트에서는 비즈니스 로직을 분리하기 위해서 Container 컴포넌트를 별도로 선언한다거나, HOC(고차 컴포넌트)를 작성하는 점이 복잡하고 불편하게 느껴졌습니다.
    
- `class` 문법과 `this`
    
    지금까지는 `class` 문법을 많이 사용해본 적이 없었는데요. `this`도 제한적으로나마 사용했었습니다. 이번에 조금이나마 `class`와 `this`를 적극적으로 사용해볼 수 있는 환경이 되었습니다. 
    
    this binding에 대해서도 생각을 많이 해볼 수 있었습니다. `this`는 실행 시점에서 결정되는 특성 때문에 `this`를 잘 사용하기 위한 코드들을 작성하게 되었는데요. 예를 들어, 클래스에서 선언된 함수, 보통은 이벤트 핸들러는 this binding이 별도로 되어있지 않습니다. 정확히는 `this`가 클래스로 인해 생성되는 인스턴스를 가리키고 있지 않는다는 점인데요. 이를 위해 this binding을 따로 해주어야 했습니다.
    
    ```jsx
    class PuzzleBoard extends React.Component {
      constructor(props) {
        super(props);
    		
    	  // this binding
        this.handleBoardClick = this.handleBoardClick.bind(this);
      }
    
      handleBoardClick() {
    	  /* ... */
      }
    
      render() {
        return (
          <div onClick={handleBoardClick} />
        );
      }
    }
    ```
    
    그리고 `constructor`에서 this binding을 해주면서, 마운트가 될 때만 이벤트 핸들러가 생성되고 이 후에는 동일 event handler의 참조를 받도록 하였습니다. 함수형 컴포넌트에서 `useCallback`을 해준 것과 비슷합니다.
    

### HOC 적용

Class형 컴포넌트에서는 비즈니스 로직의 분리하거나 반복되는 비즈니스 로직을 재사용하기 위해 HOC(Higher Order Component)를 사용해볼 수 있습니다. HOF(Higher Order Function)과도 비슷한 개념인데요. 

HOC는 파라미터로 컴포넌트를 받아서, 컴포넌트를 `return`하는 함수입니다. `return`하는 컴포넌트에서 받은 `props`들을 인자로 받은 컴포넌트로 전달하면서 자식 컴포넌트로 `render` 해주었습니다. 일종의 `Redux`에서는 미들웨어와도 비슷한 개념일 수도 있다고 생각합니다. 인자로 받은 컴포넌트를 그대로 렌더링하고, 대신 중간에 어떤 작업을 해주는 것이 비슷하다고 느꼈습니다.

이번 프로젝트에서는 모달에 들어갈 컴포넌트를 받아, 모달로 렌더링해주는 `withModal`, `react-router-dom`의 `Navigate`를 사용할 수 있는 `withNavigate`를 사용해보았습니다. 관심사의 분리를 위해 Presentational과 Container Component를 사용하는 방법도 있었지만, Modal이나 Router기능들은 재사용될 일이 많은 기능이라 생각해 별도로 HOC가 용이하다고 판단하였습니다.

그리고 hoc를 사용하면서 클래스형 컴포넌트에서도 hook의 기능들을 이용할 수 있게 되었습니다. 많은 리액트 관련 라이브러리에서 hook으로 기능들을 제공하고 있는데요. 처음에는 이를 클래스형 컴포넌트에서 바로 사용할 수 없어 어려움을 겪었었습니다. hoc를 도입한 이후, hoc에서 hook을 사용하고 전달받은 `props`들과 함께 컴포넌트에 전달해주는 방식을 사용하였습니다.

# 고민했던 점

### 이벤트 위임을 통한 최적화

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/dcfcaaca-e5d3-44a8-b39b-83f89202b52e/Screenshot_2023-01-28_at_3.20.00.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230127T191953Z&X-Amz-Expires=86400&X-Amz-Signature=bfba45042e2f49228447f60820e29233cda60fe98e14faf56e654ee1fe297516&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Screenshot%25202023-01-28%2520at%25203.20.00.png%22&x-id=GetObject)

Board는 이런 형태로 이루어져있습니다. 

원래는 각 셀 element마다 EventLIstener를 등록해주는 로직을 사용했습니다. 수 백개의 엘리먼트에 하나하나 eventListener를 거는 방식에서 조금 더 최적화를 하고 싶었는데요. Board에 등록되는 마우스 이벤트는 총 6개입니다. 이를 수 백개의 셀에 모두 적용하면 메모리 누수가 발생될 수 있어 이벤트 위임을 통해 이를 최소화하였습니다. 각 셀 엘리먼트 대신, Board 전체에 EventListener를 등록해 이벤트가 버블링 단계에서 Board에서 처리되도록 하였습니다.

적용하면서 아쉬웠던 점은, Board에서 이벤트를 처리하기 위해서 각 Cell의 data를 HTML의 dataset에 등록하는 방식을 사용한 점입니다. eventHandler에서 target의 값을 Event 객체에서 가져오므로 attribute로 등록하는 것 이외에 뚜렷한 방안을 찾지 못했는데요. dataset은 어디까지나 보조적인 접근 기술이며 웬만해서는 React적인 해결방식으로 해결하고 싶었으나 그러지 못해 아쉬웠습니다.

### 마우스 이벤트 처리

네모네모 로직은 이전부터 모바일 게임으로 즐겨 해왔던 게임입니다. 이번에 프로젝트를 하면서 해당 게임에서의 기능을 모두 재현해보고자 했습니다. 사용자가 Board를 조작하였을 때 어떻게 Board가 반응할 것인지 게임의 기능을 생각하면서 정리하였는데요. 사용자의 마우스 이벤트 요구사항은 다음과 같았습니다.

1. 빈 셀 좌클릭 시, 검정 셀(`PUZZLE.CELL_TYPE.FILL`)이 된다.
2. 빈 셀 우클릭 시, X자 셀(`PUZZLE.CELL_TYPE.MARK`)이 된다.
3. 검정 셀 혹은 X자 셀을 좌 또는 우클릭 시 빈 셀이 된다.
4. 좌클릭으로 검정 셀을 채운 후 드래그 시, 마우스가 지나가는 셀은 검정 셀이 된다.
5. 우클릭으로 X자 셀을 채운 후 드래그 시, 마우스가 지나가는 셀은 X자 셀이 된다.
6. 4, 5번의 기능에서, 셀은 빈 셀이어야 한다.
7. 좌 또는 우클릭으로 빈 셀을 채운 후 드래그 시, 마우스가 지나가는 셀은 빈 셀이 된다.
8. 7번의 기능에서 클릭 시 지운 셀과 같은 셀만 지워지게 된다.

별 생각없이 했던 게임에 의외로 많은 요구사항이 따르고 있었다는 것을 알게되었습니다.

요구 사항을 만족시키기 위해서 우선 `state`에 세 가지 값을 가지도록 했습니다.

```jsx
this.state = {
  drag: null,
  dragType: null,
  dragCellType: null,
};
```

현재 drag 중임을 나타내는 `drag`와, 빈 셀을 채우는 이벤트인지 혹은 지우는 이벤트인지를 나타내는 `dragType`, 최초 클릭 시 cellType을 기억하는 `dragCellType` 세 가지의 값이 필요했습니다. 

`dragType`이 `add`인 경우(빈 셀을 채우는 이벤트)는 별도로 `dragCellType`의 의미는 없지만, `remove`(지우는 이벤트)인 경우는 드래그 될 때 특정 `cellType`만 지울 수 있어 별도록 `dragCellType`을 추가해주었습니다.

### 라인 완료 / 퍼즐 완료 감지

10x10 퍼즐의 경우 10개의 행과 열을 가지고 있습니다. 이 20개의 라인들은 해당 라인에서 지켜져야할 셀 패턴이 정의되어 있습니다. 예를 들어 1 2 3인 라인의 경우 셀이 1개 2개 3개가 연속되어야 하며 각 연속된 셀 사이에는 최소 하나의 공백이 있어야 합니다. 

프로젝트를 진행하면서, 하나의 라인 혹은 그 안의 하나의 패턴이 해결되었음을 최대한 많이 알아내고 싶었습니다. 해결된 부분은 연하게 보이도록 하여 해결해야할 부분만 효과적으로 나타내도록 하였습니다. 이는 사용자 경험에 있어 더 중요한 점이라고 판단했습니다.

1. 클릭한 보드의 라인에 연속된 셀의 패턴을 도출해낸다.
2. 두 패턴이 일치하는 경우 해당 라인은 모두 해결되었다고 처리된다.
3. 두 패턴이 다른 경우, 각 라인 끝에서 빈 칸이 나올 때까지의 패턴을 도출한다.
4. 시작점에서부터 일치하는 패턴을 해결 처리해준다.
5. 끝점에서부터 일치하는 패턴을 해결 처리해준다.

우선 패턴 자체가 일치하는 지 판단하고, 아닌 경우에는 끝점부터 연속된 채워진 칸의 패턴으로 각 끝 패턴을 해결하도록 처리하였습니다.

다만 해당 과정에서 예상치 못한 버그가 발생하였습니다. 라인이 1 2 3인 경우 1 2 3 1의 패턴을 가지게 되면 모두 해결되는 것으로 되어버린다는 점인데요. 시작점부터 1 2 3 1인 경우에는 1 2 3이 해결되어버리기 때문입니다. 하지만 실제로는 전부 해결된 라인이 아니라 초과 작성된 라인입니다. 해당 엣지케이스를 발견하고 패턴 수에 따른 분기를 추가해주었습니다.
