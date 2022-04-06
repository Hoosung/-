<hr>

<p align="center">
<h2 align="left"> 📢 mariaDB와 MYSQL 공통점</h2>
<img src="https://user-images.githubusercontent.com/101113265/162025253-ce164476-4897-4245-a97c-9e77d72c174b.JPG" width="500" height="330">
<br/>

<p align="center">
<h2 align="left"> 📢 mariaDB와 MYSQL 차이점</h2>
<img src="https://user-images.githubusercontent.com/101113265/162024666-2a09adc3-1273-40f1-955b-546f718b16a2.JPG" width="500" height="400">
<br/>

<p align="center">
<h2 align="left"> 📢 mariaDB의 장점 </h2>
<h4> • 자동으로 신규 노드를 추가해준다.<br/>
  • 읽기/쓰기 모두 확장이 가능하다.<br/>
  • 클라이언트의 대기시간이 줄어든다.<br/>
  • 완벽한 병렬구조로 데이터를 행단위로 복제해준다.</h4>
<hr>
<br/>


<p align="center">
<h2 align="left"> 1️⃣ mariaDB 설치과정 </h2>
<img src="https://user-images.githubusercontent.com/101113265/162025783-70f1144a-bc84-409f-b91b-b82141a8c60f.JPG" width="500" height="400">
<h4 align="left"> 1) MariaDB Repository 추가<br>
  : $ sudo apt-get install software-properties-common <br>
  $ sudo apt-key adv --fetch-keys 'https://mariadb.org/mariadb_release_signing_key.asc' <br>
  $ sudo add-apt-repository 'deb [arch=amd64,arm64,ppc64el] https://mirror.yongbok.net/mariadb/repo/10.5/ubuntu focal main' <br>
→ 위 명령어들을 순서대로 입력하여 repository 추가를 해준다. </h4>
<br/>

<img src="https://user-images.githubusercontent.com/101113265/162028257-20a3851f-42cd-442c-87a7-2e267a0016b5.JPG" width="500" height="400">
<h4 align="left"> 2) MariaDB server 설치 <br>
  : $ sudo apt update; <br>
  $ sudo apt install mariadb-server <br>
  → 위 명령어들을 순서대로 입력하여 설치를 해준다.
</h4>
<br/>

<img src="https://user-images.githubusercontent.com/101113265/162028347-b81f8d9d-4323-4df0-87bc-ba471e2160f7.JPG" width="500" height="400">
<h4 align="left"> 3) MariaDB client 설치 <br>
  : $ sudo apt install mariadb-client <br>
  → 위 명령어를 입력하여 설치를 해준다.
</h4>
<br/>

<img src="https://user-images.githubusercontent.com/101113265/162028968-1894637f-c2b6-4f5a-92fd-c9c1160d8672.JPG" width="500" height="400">
<h4 align="left"> 4) MariaDB secure 설정 <br>
  : $ sudo mysql_secure_installation <br>
  → Secure 설정은 Unix socket authentification 활성화, root password 설정, anonymous users 활성화 여부,<br>
  원격으로 root login 여부, test DB 삭제 여부를 입력할 수 있다.<br>
  대부분은 기본 값으로 설정해도 무방하니 Default 값으로 설정하고, 추후 SQL 명령어나 환경 파일을 통해서 변경 가능하다. 
</h4>
<hr>
<br/>

<p align="center">
<h2 align="left">  2️⃣ mariaDB 기본동작 확인 </h2>
<img src="https://user-images.githubusercontent.com/101113265/162030043-2c0cf474-c110-4530-91d2-78823cb5b6e9.JPG" width="500" height="400">
<h4 align="left"> 기본동작 확인 <br>
  : 위 명령어들을 순서대로 입력하여 기본동작의 이상유무를 확인해준다. </h4>
  
<br/>
<hr>
