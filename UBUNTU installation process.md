<hr>

<p align="center">
<h2 align="left"> 📢 VMWARE 가상머신에서 운영체제 설치 </h2>
<h4> • 먼저 우분투 이미지가 필요한데, 밑에 설치링크에서 다운하면 됩니다.<br/>
   </h4>
<hr>
<br/>


<p align="center">
<h2 align="left"> 1️⃣ 운영체제 설치 : UBUNTU </h2>
<img src="https://user-images.githubusercontent.com/101113265/159534885-097896dc-3196-4eeb-8b2b-302725e5bcdb.png" width="400" height="350">

<p align="center">
<h4 align="left"> • 설치링크 → https://ubuntu.com/download/desktop </h4>

<hr>
<br/>

<p align="center">
<h2 align="left"> 2️⃣ UBUNTU 설치과정 </h2>
<img src="https://user-images.githubusercontent.com/101113265/159536986-7e650b17-a37c-44f6-b2f4-1789e00aa2b5.png" width="500" height="400">
<h4 align="left"> 1) 우분투 이미지 준비가 끝났으면 VMware를 실행하고 "Create a New Virtual Machine" 메뉴를 선택하여 새로운 가상 머신을 생성합니다. </h4>
<br/>

<img src="https://user-images.githubusercontent.com/101113265/159537329-a0bbb2b3-32aa-4823-b6fc-7c2208679b1a.png" width="500" height="400">
<h4 align="left"> 2) 위와 같은 창이 나타나고, 가상 머신에서 사용할 OS를 선택합니다. <br/>
  "Installer disc image file(iso)"를 선택하고, 위에서 준비한 우분투 이미지 파일을 선택합니다. </h4>
<br/>

<img src="https://user-images.githubusercontent.com/101113265/159539814-df551b5c-0491-4fbb-a8a7-99ae6786a082.JPG" width="500" height="400">
<h4 align="left"> 3) 이미지 파일이 정상적이라면 위에 사진과 같이 우분투를 인식하고 있다는 메시지가 표시됩니다.<br/>
  Next를 눌러 계속 진행해주세요.</h4>
<br/>

<img src="https://user-images.githubusercontent.com/101113265/159540070-4556cafb-63d0-47ca-a992-52f72f5ad695.JPG" width="500" height="400">
<h4 align="left"> 4) 우분투에서 사용할 계정 정보를 입력하고, 다음으로 넘어갑니다.<br/>
  (마지막에 해당 계정을 통해서 우분투에 로그인을 하게 되니 기억해주셔야합니다.) </h4>
<br/>

<img src="https://user-images.githubusercontent.com/101113265/159540452-d48c6c43-3c87-418e-a02d-5dcf1b71dea5.png" width="500" height="400">
<h4 align="left"> 5) 생성하려고하는 가상 머신의 이름 및 저장 경로를 설정할 수 있는 화면입니다.<br/>
  가상 머신의 이름을 입력하고, 가상 머신의 저장 경로는 따로 설정하지 않는 이상, 기본적으로 "내 PC/문서/Virtual Machines/" 내에 저장됩니다. </h4>
<br/>

<img src="https://user-images.githubusercontent.com/101113265/159540977-6621b7e1-299d-49af-bd08-547eae342b18.png" width="500" height="400">
<h4 align="left"> 6) 다음은 가상 머신이 내 PC에서 차지할 수 있는 용량과 저장 방식을 설정할 수 있는 화면입니다.<br/>
  그리고 가상 하드디스크의 파일을 분할 저장하는 옵션을 선택할 수 있는데, 무엇을 선택하든 사용에는 크게 차이가 없습니다. <br/>
   <br/>
• Store virtual disk as a single file: VMDK 파일을 단일 파일로 생성<br/>
• Split virtual disk into multiple files: VMDK 파일을 2GB로 분할하여 생성</h4>
<br/>

<img src="https://user-images.githubusercontent.com/101113265/159541031-14cdd855-d008-41ac-a1ea-8d6e47c2f342.png" width="500" height="400">
<h4 align="left"> 7) 다음은 추가할 가상 머신에 대하여 현재까지 설정된 내용을 보여주는 화면입니다.<br/>
  빨간색으로 표시한 박스 버튼을 클릭하면 가상 머신의 메모리, CPU 등을 세부적으로 설정할 수 있습니다. </h4>
<br/>

<img src="https://user-images.githubusercontent.com/101113265/159542032-cd4f3fea-c6a2-4a9b-9d27-8be3676fea4b.png" width="500" height=400">
<h4 align="left"> 8) 위 설정 현황 화면에서 Finish를 클릭하면 위와 같이 가상 머신이 추가된 것을 볼 수 있습니다. <br/>
  위의 과정은 OS가 설치되지 않은 본체를 마련한 것이고, 이제 OS를 설치할 차례입니다.<br/>
  "Play virtual machine" 버튼을 클릭하여 가상 머신을 실행합니다. </h4>
<br/>

<img src="https://user-images.githubusercontent.com/101113265/159542234-6a5e0763-311f-4863-9406-e1f0d38c9a89.JPG" width="500" height="400">
<img src="https://user-images.githubusercontent.com/101113265/159542280-bb7979a9-91d6-4357-8dee-778725b14d1f.JPG" width="500" height="400">
<h4 align="left"> 9) 가상 머신을 생성할 때 첨부한 우분투 ISO 파일과 설정 정보를 바탕으로, 몇 단계의 화면을 거쳐 가상 머신에 우분투가 설치됩니다. </h4>
<br/>

<img src="https://user-images.githubusercontent.com/101113265/159544808-6dae02bc-8ec5-4169-860b-1cb5139370e5.JPG" width="500" height="400">
<h4 align="left"> 10) 설치가 완료되었습니다. 이제 처음에 설정한 계정으로 우분투에 로그인할 수 있습니다. </h4>
<br/>

<img src="https://user-images.githubusercontent.com/101113265/159544848-dba9d381-f933-470d-b426-09e94b127e9d.JPG" width="500" height="400">
<h4 align="left"> 11) 가상 머신 및 OS 설치가 모두 끝난 모습입니다. </h4>
<hr>
