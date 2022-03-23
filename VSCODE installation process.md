<hr>
<p align="center">
<h2 align="left"> 📢 VSCODE (Visual Studio Code)의 장점 </h2>
<h4> • 비주얼 스튜디오 코드는 에디터로써 윈도우, MacOS, 리눅스 환경에서 모두 사용 가능하다.<br/>
  • 무료(기업에서도 무료로 사용가능)로 이용할 수 있는 소스 코드 편집기이다.<br/>
  • 다양한 프로그래밍언어를 지원하며 디버깅 지원과 Git 제어, 구문 강조 기능을 제공해준다.</h4>
<hr>
<br/>

<p align="center">
<h2 align="left"> 1️⃣ 우분투 운영체제에서 VSCODE 설치 </h2>
<img src="https://user-images.githubusercontent.com/101113265/159733579-d9a4f61d-296f-4c3c-a5b2-f540426b5136.png" width="400" height="350">

<p align="center">
<h4 align="left"> • 설치링크 → https://code.visualstudio.com/ </h4>

<hr>
<br/>

<p align="center">
<h2 align="left"> 2️⃣ VSCODE 설치과정 </h2>
<img src="https://user-images.githubusercontent.com/101113265/159734252-9fefd136-b168-4e32-a5e8-575526df4032.JPG" width="500" height="400">
<h4 align="left"> • .deb버전으로 설치한다. (우분투용). </h4>
<hr>
<br/>

<p align="center">
<h2 align="left"> 3️⃣ VSCODE 설치 중 오류발생 </h2>
<img src="https://user-images.githubusercontent.com/101113265/159734563-27676057-b26f-4df8-be5f-601ad6b4a0db.JPG" width="500" height="400">
<h5 align="left"> • 다운받은 .deb버전을 열었는데, 지원하지 않는다고 파일설치에 실패했다는 글이 뜹니다. </h5>
<hr>
<br/>

<p align="center">
<h2 align="left"> 4️⃣ VSCODE 설치오류 해결방법 </h2>
<img src="https://user-images.githubusercontent.com/101113265/159736286-fc44f3e0-ef06-44e8-8c41-b4de1d7d6bf6.JPG" width="500" height="400">
<h4 align="left"> 1) 터미널을 실행시켜줍니다. (터미널 단축키 : Ctrl + Alt + T) </h4>
<br/>

<h4 align="left"> 2) 명령어로 컴파일을 설치해줍니다. <br/>
→ sudo apt-get install build-essential 입력 </h4>
<br/>

<img src="https://user-images.githubusercontent.com/101113265/159736916-c35671ef-d46f-4d59-9e5a-81b513b70b85.JPG" width="500" height="400">
<h4 align="left"> 3) 위와 같이 설치할 패키지 명이 보여지고 설치 진행여부를 묻는데, <br/>
Y를 입력하여 설치를 진행합니다.</h4>
<br/>

<img src="https://user-images.githubusercontent.com/101113265/159529661-df3f8c42-4c9e-4912-a29c-6197f3f936e0.png" width="300" height="250">
<h4 align="left"> 4) 위에 사진처럼 설치가 자동으로 진행이 됩니다. </h4>
<br/>

<h4 align="left"> 5) 이후 커멘드커서가 뜨면 gcc가 정상적으로 설치가 되었는지 확인해줍니다. <br/>
→ gcc --help 입력 </h4>
<br/>

<img src="https://user-images.githubusercontent.com/101113265/159740326-ecd71fe2-3677-48d3-87b2-def8258b13fb.JPG" width="500" height="400">
<h4 align="left"> 6) 위에 사진처럼 gcc 옵션에 대한 설명이 뜨면 컴파일러가 정상적으로 설치됐습니다. </h4>
<br/>

<h4 align="left"> 7) 이제 VSCODE를 설치해줄건데, 먼저 MS의 GPS를 다운받기 위해 curl 패키지를 설치합니다.<br/>
→ sudo apt-get install curl 입력 </h4>
<br/>

<h4 align="left"> 8) 이후 마이크로소프트사의 GPG키를 내려받아 /etc/apt/trusted.gpg.d/ 경로에 복사합니다. <br/>
→ sudo sh -c 'curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > /etc/apt/trusted.gpg.d/microsoft.gpg' 입력 </h4>
<br/>

<h4 align="left"> 9) VScode를 다운로드 받기 위한 저장소를 /etc/apt/sources.list.d/경로에 추가합니다. <br/>
  → sudo sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main"> /etc/apt/sources.list.d/vscode.list' 입력 </h4>
<br/>

<h4 align="left"> 10) 이제 저장소 정보가 추가되었으니 패키지 목록을 업데이트합니다. <br/>
  → sudo apt-get update 입력 </h4>
<br/>

<h4 align="left"> 11) --apt-get-install을 통해서 VScode를 설치합니다. <br/>
→ sudo apt-get install code </h4>
<br/>

<h4 align="left"> 12) 설치가 완료되면 추가하였던 저장소를 삭제합니다. <br/>
→ sudo rm /etc/apt/sources.list.d/vscode.list </h4>
<br/>

<img src="https://user-images.githubusercontent.com/101113265/159743432-cc0f0dce-76ed-4b2c-b620-2a6ab2e78da5.JPG" width="500" height="400">
<h4 align="left"> 13) 정상적으로 설치가 완료되면 위에 사진처럼 VScode 아이콘이 생성됩니다. </h4>
<br/>
<hr>
