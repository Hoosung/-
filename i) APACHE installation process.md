<hr>
<p align="center">
<h2 align="left"> 📢 APACHE의 장점 </h2>
<h4> • 클라이언트 요청을 처리하기 위해 멀티스레드 방식을 따른다.<br/>
  • 웹 서버 자체 내에서 동적 컨텐츠를 처리한다. <br/>
  • 모듈을 동적으로 로드 및 언로드한다.</h4>
<hr>
<br/>

<p align="center">
<h2 align="left"> 1️⃣ 우분투 운영체제에서 APACHE 웹 서버 설치 </h2>
<img src="https://user-images.githubusercontent.com/101113265/162013127-f0774761-a332-4f83-8186-2094c9937f6d.JPG" width="400" height="350">

<hr>
<br/>

<p align="center">
<h2 align="left"> 2️⃣ APACHE 설치과정 </h2>
<img src="https://user-images.githubusercontent.com/101113265/162014087-f0f30bc7-71e9-4d07-b50e-3a5eb8600008.JPG" width="500" height="400">
<h4 align="left"> 1) 터미널을 이용해 apt 업데이트<br>
  : 우선 아파치 설치전 최신버전으로 다운 받기 위해 apt를 업데이트 해줍니다.<br>
  ($ sudo apt-get update 입력) </h4>
<br/>

<img src="https://user-images.githubusercontent.com/101113265/162014489-e10062fd-47a2-4ec9-9770-e588c9c4fd7a.JPG" width="500" height="400">
<h4 align="left"> 2) apache2 설치 <br>
  : 우리가 사용하고 있는 OS는 우분투이기 때문에 apache가 아닌 apache2를 설치합니다.<br>
  ($ sudo apt-get install apache2 입력) </h4>
<br/>

<img src="https://user-images.githubusercontent.com/101113265/162015506-0e265ba0-6b6f-4ae9-9460-70429ed3997c.JPG" width="500" height="400">
<h4 align="left"> 3) apache2 설치 확인<br>
  : apache2 설치를 확인해줍니다. <br>
  ($ apache2 -v을 입력) </h4>
<br/>

<img src="https://user-images.githubusercontent.com/101113265/162015742-acb9d19c-40d6-4f99-9bde-81f91ea6f89a.JPG" width="500" height="400">
<h4 align="left"> 4) apache2 구동 확인<br>
  : 80포트가 LISTEN중임을 확인할 수 있습니다.<br>
  ($ netstat -ntlp 입력)<br><br> 

-- 혹시 아파치가 구동중이지 않다면 밑에 명령어를 이용해줍니다.<br>
시작 : $ sudo service apache2 restart <br>
재시작 : $ sudo service apache2 restart <br>
종료 : $ sudo service apache2 stop</h4>
<br/>

<img src="https://user-images.githubusercontent.com/101113265/162017033-be8da54f-e715-460d-b192-e63b7851ea92.JPG" width="500" height="400">
<h4 align="left"> 5) 웹 화면 확인 <br/>
  : 우분투 내에 firefox 웹 브라우저에 'localhost'를 타이핑하면 확인 가능합니다.</h4>
<br/>

<img src="https://user-images.githubusercontent.com/101113265/162022462-cfef74af-b8f7-41d4-bcbc-420e9ed3bd15.JPG" width="500" height="400">
<h4 align="left"> 6) 외부 웹 서버에서도 화면 확인 <br/>
  : ① index.html에서 title 앞에 KimHoosung을 입력하고 저장한다. ($ls 입력 이후 $ sudo gedit index.html 입력) <br>
② 터미널에서 ifconfig를 통해 ip(192.168.111.128) 알아낸다. ($ ifconfig 입력) <br>
③ window 운영체제 cmd에서 핑테스트를 해보고 이상없음을 확인한다. <br>
④ window에서 인터넷에 들어가서 ip(192.168.111.128) 입력해서 title 앞에 kimHoosung 뜨는 거를 확인한다.<br>
→ 외부환경에서도 접속가능한 것을 확인 </h4>
<br/>
<hr>
