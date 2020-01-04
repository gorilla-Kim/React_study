# React_study



## 📌React-Start

* **간편시작 커널 명령어** `(Window)`

  * `npx create-react-app` 

  * **npx 란?**

    npm을통해 install 진행시 해당 라이브러리 혹은 모듈 설치를 실행한 폴더(dir)안에 해당 파일을 설치합니다. 하지만 npx는 일회성으로 설치를 진행하지 않고 한번만 실행을 위해 사용할때 사용합니다. 예를들어 필요 파일및 디렉토리 설치를 위한 세팅작업에 사용이 되어집니다.

  * **중요 ❗**

    npx create-react-app을 실행하기 전에 global로 react를 설치해 두진 않았는지 체크하기 바란다. 왜냐하면, 전역으로 이미 create-react-app이 설치되어 있다면 npx를 이용해 일회성으로 설치가 바람직하게 되어지지 않을 수 있다(아마 안될거다.). 

## 📌 JSX 사용해보기

* **Javascript + XML**
  * React component를 만들때 Document를 생성하는 Script를 HTML 스럽게 만들어주는 기술입니다.
* **📗 조건**
  1. 모든 Component들은 하나의 Div안에 감싸져 있어야 합니다.
     * 단일 컴포넌트로 만들어야 된다는 의미인데 이를 위해 하나의 div안에 만들고자 하는 document들을 만들어 집어넣지만, 이런 방식으로 사용하게 된다면 원치않게 div가 무분별하게 늘어나는 상황이 발생하게 됩니다. 
     * 이러한 일을 방지하고 싶다면 Fragment를 사용하는 방법이 있습니다. Fragment란 기존에 감싸는데 사용했던 div대신에  `<> </>` 처럼 비어있는 tag 모양으로 감싸는것입니다. React가 인식할때는 하나의 Component로 인식하나 실제  Rendering 과정에서는 반영이되어지지 않습니다.