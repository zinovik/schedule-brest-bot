export const getSchedule = () => ({
  title: '',
  schedules: [],
});

export const getPageMock = () => `

<html><head>
<title>филиал "Автовокзал г. Бреста"</title>
<meta http-equiv=Content-Type content="text/html; charset=windows-1251">
<META 
content="Брестский автовокзал, Автовокзал Брест, Автовокзал, расписание движения автобусов услуги" 
name=keywords>
<META 
content="Сайт Брестского автовокзала. На сайте вы найдете информацию о предприятии, предоставляемых услугах, а также расписание движения автобусов" 
name=description><LINK id=stylesheet href="css/styles.css" type=text/css rel=stylesheet ></head>
<body bgColor=#d8e6f0>
<div class=layout>
<TABLE borderColor=#284e6a cellSpacing=0 cellPadding=0 width="100%" border=0>
  <tr class=top-logo>
    <td align=left width=210 ;><IMG src="images/top_left.gif" > </td>
    <td><IMG src="images/top.jpg" > </td></tr>
  <tr>
    <td class=top-menu vAlign=bottom align=middle 
    background=images/topmenu_bg.jpg colSpan=2 height=35>
      <ul>
        <li><A href="index.htm" >Главная</A> </li>
        <li><A href="about.htm" >О предприятии</A> </li>
        <li><A href="service.htm" >Услуги</A> </li>
        <li><A href="info.htm" >Информация</A> </li>
        <li><A href="newrasp.htm" >Расписание</A> </li>
        <li><A href="contacts.htm" >Контакты</A> </li>
        <li><A href="obrInd.htm" >Обращения</A> </li></ul></td></tr></TABLE>
<TABLE class=all-table>
  <TBODY>
  <tr>
    <td 
    style="BORDER-RIGHT: #5a8db5 5px solid; BORDER-TOP: #5a8db5 5px solid; BORDER-LEFT: #5a8db5 5px solid; BORDER-BOTTOM: #5a8db5 5px solid; BACKGROUND-COLOR: #efeff2" 
    ><IMG src="images/polosaRasp2.png" > <br 
      >
      <p align=center><span class=rasp 
      ><A style="COLOR: #05417c" href="international.htm" >Расписание 
      международных рейсов</A>&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; <A style="COLOR: #05417c" href="mezgorod.htm" >Расписание междугородных 
      рейсов</A>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; <A style="COLOR: #05417c" href="prigorod.htm" >Расписание пригородных 
      рейсов</A>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; <A style="COLOR: #05417c" href="newrasp.htm" >Новости</A>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
      &nbsp;&nbsp; </span></p>
      <table><span style="PADDING-LEFT: 60px" 
        >Последнее обновление&nbsp; 19/07/2019 
        г.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
        <div style="PADDING-LEFT: 30px"><strong 
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;На этой 
        странице приведено регулярное расписание.&nbsp; В расписании возможны 
        изменения - отмены и переносы&nbsp;рейсов, ввод&nbsp; дополнительных 
        разовых рейсов&nbsp;и т.п.&nbsp;&nbsp;</strong>&nbsp;<br 
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;Уточненную 
        информацию вы можете получить в справочном бюро по:<br 
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        тел.<strong> 114</strong>&nbsp; - для абонентов 
        г.Бреста и Брестского района стационарной сети и МТС;<br 
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        тел.<strong> 8 (0162) 93-37-04 </strong>- для 
        абонентов других населённых пунктов. <br>Кроме 
        приведенного на нашем сайте, вы также можете посмотреть расписание 
        движения автобусов (с оперативными данными, наличием мест и ценами) из 
        городов республики (в том числе и Бреста), подключенных к 
        республиканской системе продажи билетов, воспользовавшись сайтом&nbsp;<span 
        class=rasp><A style="COLOR: #05417c" 
        href="http://ticketbus.by "> http://ticketbus.by 
        </A></span><br>
        <h6 style="MARGIN-BOTTOM: 25px">Расписание движения 
        пригородных рейсов </h6></td></tr></div></TABLE>
      <table 
      style="FONT-SIZE: small; FONT-FAMILY: Geneva, Arial, Helvetica, sans-serif" 
      cellSpacing=0 width="99%" align=center border=1 
      table-layout="auto">
        <TBODY>
        <tr align=middle>
          <td><STRONG>Маршрут 
            </STRONG></td>
          <td><STRONG>Плат- <br 
            >форма </STRONG></td>
          <td><STRONG>Регулярность 
            <br>рейса </STRONG></td>
          <td><STRONG>Отправл. с АВ 
            <br>г. Бреста</STRONG></td>
          <td><STRONG 
            >&nbsp;Отпр.&nbsp; с<br 
            >&nbsp;&nbsp;&nbsp;&nbsp;"Тех.ун-т"&nbsp;&nbsp;</STRONG></td>
          <td><STRONG>Прибытие на 
            <br>конечн.&nbsp;&nbsp;пункт </STRONG></td>
          <td><STRONG>Отправление с 
            <br>конечн.пункта </STRONG></td>
          <td><STRONG>Прибытие на 
            <br>АВ&nbsp; г. Бреста </STRONG></td></tr>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - сан. "Белая Вежа" 
          <TD>4</TD>
          <TD>ежедневно</TD>
          <TD>&nbsp; 7-35&nbsp; 12-00<br 
            >15-00&nbsp; 18-00 </TD>
          <TD>&nbsp;&nbsp;</TD>
          <TD>&nbsp; 8-40&nbsp; 13-05<br 
            >16-05&nbsp; 19-05 </TD>
          <TD>&nbsp; 6-20&nbsp; 9-45<br 
            >13-25&nbsp; 16-20 </TD>
          <TD>&nbsp; 7-25&nbsp; 10-50<br 
            >14-30&nbsp; 17-25 </TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Беловежский 
          <TD>11</TD>
          <TD>ежедневно</TD>
          <TD>&nbsp;6-20&nbsp;&nbsp; 17-00</TD>
          <TD>&nbsp;</TD>
          <TD>&nbsp;7-38&nbsp;&nbsp; 18-18</TD>
          <TD>&nbsp;7-43&nbsp;&nbsp; 18-23</TD>
          <TD>&nbsp;9-10&nbsp;&nbsp; 19-50</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Беловежский 
          <TD>11</TD>
          <TD>ежедневно</TD>
          <TD>&nbsp; 8-10&nbsp; 13-50<br 
            >16-00&nbsp; 18-40 </TD>
          <TD>&nbsp;&nbsp;</TD>
          <TD>&nbsp; 9-15&nbsp; 15-05<br 
            >17-15&nbsp; 19-55</TD>
          <TD>&nbsp; 9-29&nbsp; 15-09<br 
            >17-18&nbsp; 19-58</TD>
          <TD>10-50&nbsp; 16-30<br 
            >18-35&nbsp; 21-15</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Беловежский 
          <TD>11</TD>
          <TD>сб, вс</TD>
          <TD>10-50</TD>
          <TD>&nbsp; </TD>
          <TD>12-05</TD>
          <TD>12-09</TD>
          <TD>13-30</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - сан. "Берестье" 
          <TD>7</TD>
          <TD>ежедневно</TD>
          <TD>&nbsp; 8-15&nbsp; 12-50&nbsp; 17-20</TD>
          <TD>&nbsp;</TD>
          <TD>&nbsp; 9-36&nbsp; 14-11&nbsp; 18-41</TD>
          <TD>&nbsp; 9-43&nbsp; 14-18&nbsp; 18-48</TD>
          <TD>11-07&nbsp; 15-42&nbsp; 20-12</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - сан. "Берестье" 
          <TD>7</TD>
          <TD>ежедневно</TD>
          <TD>&nbsp; 6-00&nbsp; 11-00<br 
            >14-00&nbsp; 16-50</TD>
          <TD>&nbsp;</TD>
          <TD>&nbsp; 6-45&nbsp; 11-45<br 
            >14-45&nbsp; 17-35</TD>
          <TD>&nbsp; 6-45&nbsp; 12-10<br 
            >15-10&nbsp; 18-00</TD>
          <TD>&nbsp; 7-35&nbsp; 12-55<br 
            >15-55&nbsp; 18-45</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - с/т "Берёзка" (аэропорт) 

          <TD>3</TD>
          <TD>сб, вс</TD>
          <TD>&nbsp; 8-30&nbsp; 19-25</TD>
          <TD>&nbsp; 8-40&nbsp; 19-35 </TD>
          <TD>&nbsp; 9-08&nbsp; 20-03</TD>
          <TD>&nbsp; 9-11&nbsp; 20-06</TD>
          <TD>&nbsp; 9-50&nbsp; 20-45</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - с/т "Берёзка" (Прилуки) 
          <TD>9</TD>
          <TD>ср, сб, вс</TD>
          <TD>&nbsp; 7-00&nbsp; 17-50</TD>
          <TD>&nbsp;</TD>
          <TD>&nbsp; 7-38&nbsp; 18-28</TD>
          <TD>&nbsp; 7-41&nbsp; 18-31</TD>
          <TD>&nbsp; 8-21&nbsp; 19-11</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Блювиничи </TD>
          <TD>3</TD>
          <TD>пн,вт,ср,чт,пт</TD>
          <TD>18-00</TD>
          <TD>&nbsp;</TD>
          <TD>18-47</TD>
          <TD>6-57</TD>
          <TD>7-45</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Богданы </TD>
          <TD>7</TD>
          <TD>ежедневно </TD>
          <TD>&nbsp; 9-30&nbsp; 11-50<br 
            >14-40&nbsp; 18-10</TD>
          <TD>&nbsp;</TD>
          <TD>10-35&nbsp; 12-55<br 
            >15-45&nbsp; 19-15</TD>
          <TD>&nbsp; 7-35&nbsp; 10-35<br 
            >12-55&nbsp; 16-50</TD>
          <TD>&nbsp; 8-45&nbsp; 11-45<br 
            >14-05&nbsp; 18-00</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - сан. "Буг" 
          <TD>11</TD>
          <TD>ежедневно </TD>
          <TD>&nbsp; 7-05&nbsp; 13-20&nbsp; 16-40</TD>
          <TD>&nbsp; 7-20&nbsp; 13-35&nbsp; 16-55</TD>
          <TD>&nbsp; 8-10&nbsp; 14-25&nbsp; 17-45</TD>
          <TD>&nbsp; 8-25&nbsp; 14-30&nbsp; 17-55</TD>
          <TD>&nbsp; 9-36&nbsp; 15-41&nbsp; 19-06</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Бульково 
          <TD>6</TD>
          <TD>ср, пт, сб, вс</TD>
          <TD>&nbsp; 8-10&nbsp; 18-50</TD>
          <TD>&nbsp; 8-28&nbsp; 19-08 </TD>
          <TD>&nbsp; 8-50&nbsp; 19-30</TD>
          <TD>&nbsp; 8-53&nbsp; 19-33</TD>
          <TD>&nbsp; 9-35&nbsp; 20-15</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Великорита 
          <TD>7</TD>
          <TD>ср, сб, вс</TD>
          <TD>8-45</TD>
          <TD>&nbsp;</TD>
          <TD>9-57</TD>
          <TD>9-58</TD>
          <TD>10-52</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Великорита 
          <TD>8</TD>
          <TD>ср, сб, вс</TD>
          <TD>15-40</TD>
          <TD>&nbsp;</TD>
          <TD>16-52</TD>
          <TD>16-53</TD>
          <TD>17-47</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Величковичи 
          <TD>3</TD>
          <TD>ежедневно</TD>
          <TD>&nbsp; 8-05&nbsp; 12-30<BR 
            >18-00&nbsp; 21-00</TD>
          <TD>&nbsp;</TD>
          <TD>&nbsp; 9-30&nbsp; 13-55<BR 
            >19-15&nbsp; 22-19</TD>
          <TD>&nbsp; 5-55&nbsp;&nbsp; 9-31<BR 
            >14-00&nbsp; 19-16</TD>
          <TD>&nbsp; 7-35&nbsp; 10-50&nbsp;<BR 
            >15-25&nbsp; 20-35</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Вельямовичи ч/з Непли 
          <TD>2</TD>
          <TD>пн, ср, пт</TD>
          <TD>6-20</TD>
          <TD>&nbsp;</TD>
          <TD>7-33</TD>
          <TD>7-34</TD>
          <TD>8-44</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Вельямовичи ч/з Костичи 
          <TD>2</TD>
          <TD>вт, чт, сб, вс</TD>
          <TD>6-20</TD>
          <TD>&nbsp;</TD>
          <TD>7-33</TD>
          <TD>7-34</TD>
          <TD>8-44</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Вельямовичи ч/х Нехолсты 

          <TD>2</TD>
          <TD>ежедневно</TD>
          <TD>&nbsp; 8-15&nbsp; 11-00&nbsp; 13-50<br 
            >15-45&nbsp; 17-40</TD>
          <TD>&nbsp;</TD>
          <TD>&nbsp; 9-03&nbsp; 11-48&nbsp; 14-38<br 
            >16-33&nbsp; 18-28</TD>
          <TD>&nbsp;7-00 &nbsp;&nbsp; 9-15&nbsp; 12-00<br 
            >14-40&nbsp; 16-35&nbsp; 18-35</TD>
          <TD>&nbsp; 7-48&nbsp; 10-03&nbsp; 12-48<br 
            >15-28&nbsp; 17-23&nbsp; 19-23</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Войская 
          <TD>4</TD>
          <TD>пн, чт, пт</TD>
          <TD>&nbsp; 6-40&nbsp; 15-40</TD>
          <TD>&nbsp;</TD>
          <TD>&nbsp; 8-00&nbsp; 17-00</TD>
          <TD>&nbsp; 8-02&nbsp; 17-02</TD>
          <TD>&nbsp; 9-26&nbsp; 18-26</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Войская (ч/з Млыны) 
          <TD>4</TD>
          <TD>ср, сб, вс</TD>
          <TD>&nbsp; 6-40&nbsp; 15-40</TD>
          <TD>&nbsp;</TD>
          <TD>&nbsp; 8-22&nbsp; 17-22</TD>
          <TD>&nbsp; 8-24&nbsp; 17-24</TD>
          <TD>10-20&nbsp; 19-20</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Войская (ч/з Млыны) 
          <TD>4</TD>
          <TD>сб, вс</TD>
          <TD>11-10</TD>
          <TD>&nbsp;</TD>
          <TD>12-52</TD>
          <TD>12-54</TD>
          <TD>14-50</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Войская 
          <TD>4</TD>
          <TD>чт</TD>
          <TD>11-10</TD>
          <TD>&nbsp;</TD>
          <TD>12-30</TD>
          <TD>12-32</TD>
          <TD>13-56</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Волчин 
          <TD>3</TD>
          <TD>ежедневно</TD>
          <TD>14-20</TD>
          <TD>&nbsp;</TD>
          <TD>15-20</TD>
          <TD>15-30</TD>
          <TD>16-44</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Высокое 
          <TD>2</TD>
          <TD>ежедневно</TD>
          <TD>12-10&nbsp; 18-00 20-00</TD>
          <TD>&nbsp;</TD>
          <TD>13-25 19-15 &nbsp; 21-10</TD>
          <TD>&nbsp; 6-00&nbsp;&nbsp; 7-50&nbsp; 16-00</TD>
          <TD>&nbsp; 7-00&nbsp;&nbsp; 9-05&nbsp; 
        17-15</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Высокое - Бобинка 
          <TD>2</TD>
          <TD>пн, ср, пт, сб</TD>
          <TD>&nbsp; 7-10&nbsp; 14-40</TD>
          <TD>&nbsp;</TD>
          <TD>&nbsp; 9-23&nbsp; 17-00</TD>
          <TD>&nbsp; 9-30&nbsp; 17-02</TD>
          <TD>11-55&nbsp; 19-25</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Высокое - Чвирки&nbsp; 
          <TD>2</TD>
          <TD>вт, чт, вс</TD>
          <TD>&nbsp; 7-10&nbsp; 14-40</TD>
          <TD>&nbsp;</TD>
          <TD>&nbsp; 9-30&nbsp; 17-00</TD>
          <TD>&nbsp; 9-31&nbsp; 17-01</TD>
          <TD>11-55&nbsp; 19-25</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Высокое ч/з Волчин 
          <TD>2</TD>
          <TD>пн, пт</TD>
          <TD>&nbsp; 7-00&nbsp; 15-30</TD>
          <TD>&nbsp;</TD>
          <TD>&nbsp; 8-32&nbsp; 17-02</TD>
          <TD>&nbsp; 8-35&nbsp; 17-05</TD>
          <TD>10-20&nbsp; 18-50</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Высоко-Литовск 
          <TD>2</TD>
          <TD>ежедневно</TD>
          <TD>&nbsp; 7-05&nbsp; 11-20<br 
            >14-15&nbsp; 17-05</TD>
          <TD>&nbsp;</TD>
          <TD>&nbsp; 7-50&nbsp; 12-05<br 
            >15-00&nbsp; 17-50</TD>
          <TD>&nbsp; 8-05&nbsp; 12-45<br 
            >15-40&nbsp; 18-10</TD>
          <TD>&nbsp; 8-50&nbsp; 13-30<br 
            >16-25&nbsp; 18-55</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Домачево 
          <TD>7</TD>
          <TD>ежедневно </TD>
          <TD>&nbsp; 7-00&nbsp; 10-10&nbsp; 13-00<br 
            >15-10&nbsp; 18-00&nbsp; 20-15</TD>
          <TD>&nbsp;</TD>
          <TD>&nbsp; 8-00&nbsp; 11-10&nbsp; 14-00<br 
            >16-10&nbsp; 19-00&nbsp; 21-15</TD>
          <TD>&nbsp; 8-00&nbsp; 11-25&nbsp; 14-10<br 
            >16-30&nbsp; 21-15</TD>
          <TD>&nbsp; 9-00&nbsp; 12-25&nbsp; 15-10<br 
            >17-30&nbsp; 22-15</TD></TR>
        <tr vAlign=baseline align=middle>
        <TR align=middle>
          <td align=left>Брест - Домачево </td>
          <td>7</td>
          <td>пн,вт,чт,сб,вс</td>
          <td>7-45</td>
          <td>&nbsp;</td>
          <td>8-45</td>
          <td>9-10</td>
          <td>10-10</td></TR>
        <tr vAlign=baseline align=middle>
        <TR align=middle>
          <td align=left>Брест - Домачево </td>
          <td>7</td>
          <td>пн,вт,чт,сб</td>
          <td>15-40</td>
          <td>&nbsp;</td>
          <td>16-40</td>
          <td>17-30</td>
          <td>18-30</td></TR>
        <tr vAlign=baseline align=middle>
        <TR align=middle>
          <td align=left>Брест - Жабинка </td>
          <td>6</td>
          <td>пн,вт,ср,чт,пт</td>
          <td>7-30</td>
          <td>7-43</td>
          <td>8-20</td>
          <td>8-30</td>
          <td>9-20</td></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Жабинка 
          <TD>6</TD>
          <TD>пн,вт,ср,чт,пт</TD>
          <TD>10-10&nbsp; 11-10&nbsp; 14-50<br 
            >16-40&nbsp; 17-20&nbsp; 19-10</TD>
          <TD>10-23&nbsp; 11-23&nbsp; 15-03<br 
            >16-53&nbsp; 17-33&nbsp; 19-23</TD>
          <TD>11-00&nbsp; 12-00&nbsp; 15-40<br 
            >17-30&nbsp; 18-10&nbsp; 20-00</TD>
          <TD>6-25&nbsp; 6-50&nbsp; 7-30<br 
            >11-10 12-10&nbsp; 15-50<br 
            >17-50 20-05</TD>
          <TD>7-15 &nbsp;7-40&nbsp;&nbsp;&nbsp; 
            8-20&nbsp; <br>12-00 13-00&nbsp; 16-40<br 
            >18-40 20-55</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Жабинка 
          <TD>6</TD>
          <TD>пн,вт,ср,чт,пт,сб</TD>
          <TD>&nbsp;7-00 &nbsp;&nbsp; 9-10<br 
            >11-50 14-00</TD>
          <TD>&nbsp;7-13&nbsp;&nbsp;&nbsp; 9-23<br 
            >12-03&nbsp; 14-13</TD>
          <TD>&nbsp;7-50&nbsp;&nbsp;&nbsp;10-00<br 
            >12-40&nbsp; 14-50</TD>
          <TD>&nbsp; 8-00&nbsp; 10-10<br 
            >12-50&nbsp; 15-00</TD>
          <TD>&nbsp; 8-50&nbsp; 11-00<br 
            >13-40&nbsp; 15-50</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Жабинка 
          <TD>6</TD>
          <TD>ежедневно</TD>
          <TD>16-00</TD>
          <TD>16-13</TD>
          <TD>16-50</TD>
          <TD>17-00</TD>
          <TD>17-50</TD></TR>
        <tr vAlign=baseline align=middle>
        <TR align=middle>
          <td align=left>Брест - Жабинка </td>
          <td>6</td>
          <td>пн,вт,ср,чт,пт<br><font size=2>(кроме вых. и 
          праздн.дней)</font></td>
          <td>13-35 15-30 19-50</td>
          <td></td>
          <td>14-25 16-20 20-40</td>
          <td>14-35 16-30 20-50</td>
          <td>15-25 17-20 21-40</td></TR>          
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Задерть ч/з Франополь 
          <TD>6</TD>
          <TD>вт, сб</TD>
          <TD>&nbsp; 6-50&nbsp; 18-00</TD>
          <TD>&nbsp; 7-06&nbsp; 18-16</TD>
          <TD>&nbsp; 8-17&nbsp; 19-27</TD>
          <TD>&nbsp; 8-21&nbsp; 19-31</TD>
          <TD>&nbsp; 9-45&nbsp; 20-55</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Закий 
          <TD>12</TD>
          <TD>пн,вт,ср,чт,пт</TD>
          <TD>&nbsp; 7-30&nbsp;&nbsp; 9-15&nbsp; <br> </TD>
          <TD>&nbsp; 7-42&nbsp;&nbsp; 9-27<br> </TD>
          <TD>&nbsp; 8-15&nbsp;&nbsp; 10-00&nbsp; <br></TD>
          <TD>&nbsp; 6-35&nbsp;&nbsp; 8-15<br> 10-00</TD>
          <TD>&nbsp; 7-20&nbsp;&nbsp; 9-00<br> 10-45&nbsp;</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Закий 
          <TD>12</TD>
          <TD><strong><font size=2>до 
            25/07</font></strong>&nbsp;<br>пн,вт,ср,чт,пт</TD>
          <TD>&nbsp; 13-10 
            18-10<br>&nbsp; 19-50 </TD>
          <TD> &nbsp;13-22
            &nbsp;18-22<br>&nbsp; 20-02&nbsp; </TD>
          <TD><font face=System></font>   <br>
            13-55 &nbsp;18-55<br> 20-35</TD>
          <TD>  
             14-00<br> 18-55 &nbsp;20-40</TD>
          <TD> 
            14-45 <br>19-40&nbsp; 21-00</TD></TR>            
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Закий 
          <TD>12</TD>
          <TD><font size=2><strong>с 
            25/07</strong></font><br>пн,вт,ср,чт,пт</TD>
          <TD>&nbsp; 14-00 
            17-30<br>&nbsp; 19-30 </TD>
          <TD> &nbsp;14-12
            &nbsp;17-42<br>&nbsp; 19-42&nbsp; </TD>
          <TD><font face=System></font>   <br>
            14-45 &nbsp;18-15<br> 20-15</TD>
          <TD>  
             14-50<br> 18-20&nbsp;&nbsp;20-20</TD>
          <TD> 
            15-35 <br>19-05&nbsp; 21-05</TD></TR>                        
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Закий 
          <TD>12</TD>
          <TD>сб, вс</TD>
          <TD>&nbsp; 8-00&nbsp; 10-30&nbsp; 17-30</TD>
          <TD>&nbsp; 8-12&nbsp; 10-42&nbsp; 14-42</TD>
          <TD>&nbsp; 8-45&nbsp; 11-15&nbsp; 18-15</TD>
          <TD>7-00<br>&nbsp; 
            8-45&nbsp; 11-20&nbsp; 18-20</TD>
          <TD>7-45<br>&nbsp; 
            9-30&nbsp; 12-05&nbsp; 19-05</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Залесье 
          <TD>2</TD>
          <TD>сб, вс</TD>
          <TD>7-00</TD>
          <TD>&nbsp;</TD>
          <TD>8-25</TD>
          <TD>8-30</TD>
          <TD>9-55</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Залесье 
          <TD>2</TD>
          <TD>сб</TD>
          <TD>16-25</TD>
          <TD>&nbsp;</TD>
          <TD>17-51</TD>
          <TD>18-01</TD>
          <TD>19-34</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Залесье 
          <TD>2</TD>
          <TD>пт, вс</TD>
          <TD>17-30</TD>
          <TD>&nbsp;</TD>
          <TD>18-56</TD>
          <TD>19-06</TD>
          <TD>20-41</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Збироги ч/з Братылово 
          <TD>5</TD>
          <TD>вс</TD>
          <TD>7-25</TD>
          <TD>7-40</TD>
          <TD>8-30</TD>
          <TD>8-33</TD>
          <TD>9-25</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Збироги ч/з Братылово 
          <TD>6</TD>
          <TD>сб</TD>
          <TD>16-20</TD>
          <TD>16-40</TD>
          <TD>17-30</TD>
          <TD>17-33</TD>
          <TD>18-25</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Збироги ч/з Кошелево 
          <TD>2</TD>
          <TD>пн,вт,ср,чт,пт</TD>
          <TD>&nbsp; 8-05&nbsp;&nbsp;14-50&nbsp;18-10</TD>
          <TD>&nbsp;</TD>
          <TD>&nbsp; 8-50&nbsp;&nbsp;15-35<br 
            >18-55</TD>
          <TD>&nbsp;7-05&nbsp;&nbsp;&nbsp;8-55<br 
            >15-40&nbsp; 18-55</TD>
          <TD>&nbsp;7-50&nbsp;&nbsp;&nbsp;9-40<br 
            >16-25&nbsp; 19-40</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Б.Зводы </TD>
          <TD>3</TD>
          <TD>пн, вс</TD>
          <TD>6-35&nbsp; 17-30</TD>
          <TD>&nbsp;</TD>
          <TD>7-47&nbsp; 18-42</TD>
          <TD>7-50&nbsp; 18-45</TD>
          <TD>9-25&nbsp; 20-20</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Б.Зводы </TD>
          <TD>2</TD>
          <TD>ежедневно</TD>
          <TD>11-30&nbsp; 15-00</TD>
          <TD>&nbsp;</TD>
          <TD>12-25&nbsp; 15-55</TD>
          <TD>13-00&nbsp; 16-40</TD>
          <TD>13-55&nbsp; 17-35</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Б.Зводы </TD>
          <TD>2</TD>
          <TD>вт,ср,чт,пт,сб </TD>
          <TD>18-30</TD>
          <TD>&nbsp;</TD>
          <TD>19-25</TD>
          <TD>7-30&nbsp; 19-30</TD>
          <TD>8-25&nbsp; 20-25</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Ивахновичи ч/з Черни 
          <TD>4</TD>
          <TD>пн,вт,ср,чт,пт</TD>
          <TD>&nbsp; 5-40</TD>
          <TD>&nbsp;</TD>
          <TD>&nbsp; 6-24</TD>
          <TD>&nbsp; 6-25</TD>
          <TD>&nbsp; 7-34</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Ивахновичи ч/з Черни 
          <TD>4</TD>
          <TD>сб, вс</TD>
          <TD>&nbsp; 6-15</TD>
          <TD>&nbsp;</TD>
          <TD>&nbsp; 6-50</TD>
          <TD>&nbsp; 6-51</TD>
          <TD>&nbsp; 7-50</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Ивахновичи ч/з Черни 
          <TD>4</TD>
          <TD>ежедневно</TD>
          <TD>18-20</TD>
          <TD>&nbsp;</TD>
          <TD>19-17</TD>
          <TD>19-18</TD>
          <TD>&nbsp; 7-50&nbsp; 20-14</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Ивахновичи ч/з 
            Чернавчицы 
          <TD>4</TD>
          <TD>ежедневно</TD>
          <TD>&nbsp; 7-05&nbsp; 12-50&nbsp; 17-00</TD>
          <TD>&nbsp;</TD>
          <TD>&nbsp; 8-00&nbsp; 13-43&nbsp; 18-05</TD>
          <TD>&nbsp; 8-03&nbsp; 13-45&nbsp; 18-06</TD>
          <TD>&nbsp; 9-02&nbsp; 14-42&nbsp; 19-06</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Каменец 
          <TD>5</TD>
          <TD>ежедневно</TD>
          <TD>&nbsp; 6-30</TD>
          <TD>&nbsp;</TD>
          <TD>&nbsp; 7-45</TD>
          <TD>&nbsp; 8-15</TD>
          <TD>&nbsp; 9-30</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Каменец 
          <TD>5</TD>
          <TD>пн,вт,ср,чт,пт,вс</TD>
          <TD>7-50</TD>
          <TD>&nbsp;</TD>
          <TD>9-05</TD>
          <TD>6-00</TD>
          <TD>7-15</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Каменец 
          <TD>5</TD>
          <TD>пн,вт,ср,пт,вс</TD>
          <TD>8-50</TD>
          <TD>&nbsp;</TD>
          <TD>10-05</TD>
          <TD>18-00</TD>
          <TD>19-15</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Каменец ч/з Лешню 
          <TD>5</TD>
          <TD>чт, сб</TD>
          <TD>8-50</TD>
          <TD>&nbsp;</TD>
          <TD>10-20</TD>
          <TD>18-00</TD>
          <TD>19-30</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Каменец (через сан. 
            "Белая Вежа") 
          <TD>5</TD>
          <TD>пн,вт,ср,чт,пт,сб</TD>
          <TD>09-45</TD>
          <TD>&nbsp;</TD>
          <TD>10-45</TD>
          <TD>7-50</TD>
          <TD>8-40</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Каменец 
          <TD>5</TD>
          <TD>ежедневно</TD>
          <TD>&nbsp; 10-00 11-30</TD>
          <TD>&nbsp;</TD>
          <TD>11-15&nbsp; 12-45</TD>
          <TD>12-00&nbsp;&nbsp; 9-30</TD>
          <TD>13-15&nbsp; 10-45</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Каменец 
          <TD>5</TD>
          <TD>ежедневно</TD>
          <TD>12-30&nbsp; 13-30</TD>
          <TD>&nbsp;</TD>
          <TD>13-45&nbsp; 14-45</TD>
          <TD>15-30</TD>
          <TD>16-45</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Каменец 
          <TD>5</TD>
          <TD>ежедневно</TD>
          <TD>14-00</TD>
          <TD>&nbsp;</TD>
          <TD>14-55</TD>
          <TD>11-30</TD>
          <TD>12-25</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Каменец 
          <TD>5</TD>
          <TD>ежедневно</TD>
          <TD>15-50&nbsp; 17-30</TD>
          <TD>&nbsp;</TD>
          <TD>17-05&nbsp; 18-45</TD>
          <TD>14-05&nbsp; 19-30</TD>
          <TD>15-20&nbsp; 20-45</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Каменец 
          <TD>5</TD>
          <TD>ежедневно</TD>
          <TD>18-30</TD>
          <TD>&nbsp;</TD>
          <TD>19-30</TD>
          <TD>&nbsp; 9-00</TD>
          <TD>10-00</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Каменец 
          <TD>5</TD>
          <TD>ежедневно</TD>
          <TD>19-30</TD>
          <TD>&nbsp;</TD>
          <TD>20-45</TD>
          <TD>17-20</TD>
          <TD>18-35</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Каменец 
          <TD>5</TD>
          <TD>ежедневно</TD>
          <TD>20-00</TD>
          <TD>&nbsp;</TD>
          <TD>21-00</TD>
          <TD>15-00</TD>
          <TD>16-00</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Каменец 
          <TD>5</TD>
          <TD>ежедневно</TD>
          <TD>20-50</TD>
          <TD>&nbsp;</TD>
          <TD>22-05</TD>
          <TD>18-00</TD>
          <TD>19-15</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Каменец ч/з Ратайчицы 
          <TD>4</TD>
          <TD>ср, сб</TD>
          <TD>8-45</TD>
          <TD>&nbsp;</TD>
          <TD>10-15</TD>
          <TD>6-45</TD>
          <TD>8-25</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Каменец ч/з Ратайчицы 
          <TD>4</TD>
          <TD>ср, вс</TD>
          <TD>16-50</TD>
          <TD>&nbsp;</TD>
          <TD>18-20</TD>
          <TD>15-45</TD>
          <TD>17-25</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Каменец ч/з Лисовчицы 
          <TD>4</TD>
          <TD>ежедневно</TD>
          <TD>17-40</TD>
          <TD>&nbsp;</TD>
          <TD>19-20</TD>
          <TD>5-30</TD>
          <TD>7-30</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Кобрин 
          <TD>1</TD>
          <TD>ежедневно</TD>
          <TD>6-40</TD>
          <TD>6-53</TD>
          <TD>7-36</TD>
          <TD>8-20</TD>
          <TD>9-17</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Кобрин 
          <TD>1</TD>
          <TD>пн,вт,ср,чт,пт,сб</TD>
          <TD>7-05</TD>
          <TD>7-18</TD>
          <TD>8-00</TD>
          <TD>8-10</TD>
          <TD>9-05</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Кобрин 
          <TD>1</TD>
          <TD>ежедневно</TD>
          <TD>7-40&nbsp; 7-50</TD>
          <TD>7-53&nbsp; 8-03</TD>
          <TD>8-36&nbsp; 8-45</TD>
          <TD>8-45&nbsp; 8-55</TD>
          <TD>9-42&nbsp; 9-50</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Кобрин 
          <TD>1</TD>
          <TD>пн,вт,ср,чт,пт</TD>
          <TD>8-10</TD>
          <TD>8-23</TD>
          <TD>9-10</TD>
          <TD>6-40</TD>
          <TD>7-40</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Кобрин 
          <TD>1</TD>
          <TD>ежедневно</TD>
          <TD>8-30</TD>
          <TD>8-43</TD>
          <TD>9-26</TD>
          <TD>10-00</TD>
          <TD>10-57</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Кобрин 
          <TD>1</TD>
          <TD>пн,вт,ср,чт,пт</TD>
          <TD>8-45</TD>
          <TD>9-01</TD>
          <TD>9-59</TD>
          <TD>7-30</TD>
          <TD>8-38</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Кобрин 
          <TD>1</TD>
          <TD>пн,вт,ср,чт,пт,сб</TD>
          <TD>8-55</TD>
          <TD>9-08</TD>
          <TD>9-47</TD>
          <TD>7-20</TD>
          <TD>8-12</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Кобрин 
          <TD>1</TD>
          <TD>ежедневно</TD>
          <TD>9-10 9-30 9-50</TD>
          <TD>9-27 9-43 10-03</TD>
          <TD>10-31 10-26 10-50</TD>
          <TD>6-45 10-40 7-50</TD>
          <TD>8-06 11-37 8-50</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Кобрин 
          <TD>1</TD>
          <TD>пн,вт,ср,чт,пт</TD>
          <TD>10-00</TD>
          <TD>10-16</TD>
          <TD>11-14</TD>
          <TD>7-00</TD>
          <TD>8-10</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Кобрин 
          <TD>1</TD>
          <TD>ежедневно</TD>
          <TD>10-15&nbsp; 10-25&nbsp; 10-45<br 
            >11-00&nbsp; 11-25&nbsp; 11-40</TD>
          <TD>10-28&nbsp; 10-40&nbsp; 10-58<br 
            >11-13&nbsp; 11-38&nbsp; 11-53</TD>
          <TD>11-10&nbsp; 11-30&nbsp; 11-45<br 
            >11-55&nbsp; 12-17&nbsp; 12-40</TD>
          <TD>11-30&nbsp; 11-50&nbsp; 9-15<br 
            >12-40&nbsp; 10-20&nbsp; 9-35</TD>
          <TD>12-25&nbsp; 12-55&nbsp; 10-15<br 
            >13-35&nbsp; 11-12&nbsp; 10-35</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Кобрин 
          <TD>1</TD>
          <TD>пн,вт,ср,чт,пт,вс</TD>
          <TD>12-00</TD>
          <TD>12-13</TD>
          <TD>12-56</TD>
          <TD>13-50</TD>
          <TD>14-47</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Кобрин 
          <TD>1</TD>
          <TD>сб</TD>
          <TD>12-00</TD>
          <TD>12-16</TD>
          <TD>13-16</TD>
          <TD>8-35</TD>
          <TD>9-50</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Кобрин 
          <TD>1</TD>
          <TD>сб</TD>
          <TD>12-10</TD>
          <TD>12-23</TD>
          <TD>13-06</TD>
          <TD>13-50</TD>
          <TD>14-47</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Кобрин 
          <TD>1</TD>
          <TD>ежедневно</TD>
          <TD>12-25</TD>
          <TD>12-38</TD>
          <TD>13-21</TD>
          <TD>14-10</TD>
          <TD>15-07</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Кобрин 
          <TD>1</TD>
          <TD>пн,вт,ср,чт,пт</TD>
          <TD>12-40</TD>
          <TD>12-56</TD>
          <TD>13-54</TD>
          <TD>11-15</TD>
          <TD>12-23</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Кобрин 
          <TD>1</TD>
          <TD>ежедневно</TD>
          <TD>12-55&nbsp; 13-20&nbsp; 13-40</TD>
          <TD>13-08&nbsp; 13-33&nbsp; 13-55</TD>
          <TD>13-55&nbsp; 14-20&nbsp; 14-45</TD>
          <TD>11-05&nbsp; 12-10&nbsp; 14-50</TD>
          <TD>12-05&nbsp; 13-10&nbsp; 15-55</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Кобрин 
          <TD>1</TD>
          <TD>пн,вт,ср,чт,пт</TD>
          <TD>14-00&nbsp; 14-10</TD>
          <TD>14-16&nbsp; 14-26</TD>
          <TD>15-16&nbsp; 15-24</TD>
          <TD>8-35&nbsp; 12-25</TD>
          <TD>9-50 13-35</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Кобрин&nbsp; 
          <TD>1</TD>
          <TD>ежедневно</TD>
          <TD>14-25&nbsp; 14-40&nbsp; 14-50<br 
            >15-10&nbsp; 15-30</TD>
          <TD>14-38&nbsp; 14-53&nbsp; 15-03<br 
            >15-23&nbsp; 15-43</TD>
          <TD>15-25&nbsp; 15-36&nbsp; 15-45<br 
            >16-02&nbsp; 16-26</TD>
          <TD>13-05&nbsp; 15-45&nbsp; 16-00<br 
            >13-30&nbsp; 17-00</TD>
          <TD>14-05&nbsp; 16-42&nbsp; 16-55<br 
            >14-22&nbsp; 17-57</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Кобрин 
          <TD>1</TD>
          <TD>пн,вт,ср,чт,пт,сб</TD>
          <TD>15-55</TD>
          <TD>16-11</TD>
          <TD>17-09</TD>
          <TD>14-30</TD>
          <TD>15-38</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Кобрин&nbsp; 
          <TD>1</TD>
          <TD>ежедневно</TD>
          <TD>16-05&nbsp; 16-30&nbsp; 17-00<br 
            >17-10&nbsp; 17-20</TD>
          <TD>16-20&nbsp; 16-43&nbsp; 17-13<br 
            >17-27&nbsp; 17-33</TD>
          <TD>17-10&nbsp; 17-25&nbsp; 18-00<br 
            >18-26&nbsp; 18-15</TD>
          <TD>17-15&nbsp; 18-00&nbsp; 15-10<br 
            >15-30&nbsp; 18-30</TD>
          <TD>18-20&nbsp; 18-55&nbsp; 16-10<br 
            >17-01&nbsp; 19-25</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Кобрин 
          <TD>1</TD>
          <TD>пн,вт,ср,чт,пт</TD>
          <TD>17-30</TD>
          <TD>17-46</TD>
          <TD>18-44</TD>
          <TD>16-10</TD>
          <TD>17-20</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Кобрин&nbsp; 
          <TD>1</TD>
          <TD>ежедневно</TD>
          <TD>17-45&nbsp; 18-10&nbsp; 18-25<br 
            >18-40&nbsp; 18-50&nbsp; 19-10</TD>
          <TD>17-58&nbsp; 18-23&nbsp; 18-40<br 
            >18-53&nbsp; 19-03&nbsp; 19-23</TD>
          <TD>18-45&nbsp; 19-10&nbsp; 19-30<br 
            >19-36&nbsp; 19-46&nbsp; 20-02</TD>
          <TD>16-40&nbsp; 19-20&nbsp; 19-40<br 
            >19-50&nbsp; 20-00&nbsp; 17-30</TD>
          <TD>17-40&nbsp; 17-20&nbsp; 20-45<br 
            >20-47&nbsp; 20-57&nbsp; 18-22</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Кобрин 
          <TD>1</TD>
          <TD>пн,вт,ср,чт,сб</TD>
          <TD>19-25</TD>
          <TD>19-38</TD>
          <TD>20-21</TD>
          <TD>20-30</TD>
          <TD>21-27</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Кобрин&nbsp; 
          <TD>1</TD>
          <TD>ежедневно</TD>
          <TD>19-40&nbsp; 20-00&nbsp; 20-10<br 
            >20-35</TD>
          <TD>19-53&nbsp; 20-16&nbsp; 20-23<br 
            >20-48</TD>
          <TD>20-35&nbsp; 21-12&nbsp; 21-05<br 
            >21-35</TD>
          <TD>21-00&nbsp; 18-40&nbsp; 21-20<br 
            >19-00</TD>
          <TD>21-55&nbsp; 19-52&nbsp; 22-15<br 
            >20-00</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Кобрин 
          <TD>1</TD>
          <TD>сб, вс</TD>
          <TD>21-10</TD>
          <TD>21-23</TD>
          <TD>22-10</TD>
          <TD>19-20</TD>
          <TD>20-20</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Кобрин 
          <TD>1</TD>
          <TD>пн,вт,ср,чт,пт</TD>
          <TD>21-20</TD>
          <TD>21-36</TD>
          <TD>22-36</TD>
          <TD>19-20</TD>
          <TD>20-38</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Кобрин 
          <TD>1</TD>
          <TD>вс</TD>
          <TD>21-45</TD>
          <TD>21-20</TD>
          <TD>22-53</TD>
          <TD>20-30</TD>
          <TD>21-42</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - с/т "Лесное" 
          <TD>9</TD>
          <TD>ср, сб, вс</TD>
          <TD>8-05</TD>
          <TD>8-15</TD>
          <TD>9-05</TD>
          <TD>9-08</TD>
          <TD>10-19</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - с/т "Лесное" 
          <TD>9</TD>
          <TD>пт, сб, вс</TD>
          <TD>15-40</TD>
          <TD>15-50</TD>
          <TD>16-50</TD>
          <TD>16-53</TD>
          <TD>18-09</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - с/т "Лесное" 
          <TD>9</TD>
          <TD>ср</TD>
          <TD>18-00</TD>
          <TD>18-16</TD>
          <TD>19-21</TD>
          <TD>19-24</TD>
          <TD>20-42</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Лисовчицы&nbsp; 
          <TD>4</TD>
          <TD>ежедневно</TD>
          <TD>13-30</TD>
          <TD>&nbsp;</TD>
          <TD>14-53</TD>
          <TD>14-55</TD>
          <TD>16-20</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Ляховцы ч/з Луково 
          <TD>7</TD>
          <TD>пт</TD>
          <TD>&nbsp; 6-20&nbsp; 17-10</TD>
          <TD>&nbsp;</TD>
          <TD>&nbsp; 7-51&nbsp; 18-46</TD>
          <TD>&nbsp; 8-00&nbsp; 18-50</TD>
          <TD>&nbsp; 9-44&nbsp; 20-34</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Ляховцы 
          <TD>7</TD>
          <TD>ср, сб, вс</TD>
          <TD>&nbsp; 6-20&nbsp; 17-10</TD>
          <TD>&nbsp;</TD>
          <TD>&nbsp; 7-40&nbsp; 18-35</TD>
          <TD>&nbsp; 7-45&nbsp; 18-40</TD>
          <TD>&nbsp; 9-16&nbsp; 20-11</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Малорита 
          <TD>9</TD>
          <TD>пн,вт,ср,чт,пт,сб</TD>
          <TD>6-30</TD>
          <TD>&nbsp;</TD>
          <TD>7-28</TD>
          <TD>7-30</TD>
          <TD>8-30</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Малорита 
          <TD>8</TD>
          <TD>ежедневно</TD>
          <TD>&nbsp; 
            7-00&nbsp;&nbsp;&nbsp;7-30&nbsp;&nbsp;&nbsp; 7-50<br 
            >&nbsp; 
            8-40&nbsp;&nbsp;&nbsp;9-30&nbsp;&nbsp;10-00 </TD>
          <TD>&nbsp;</TD>
          <TD>&nbsp; 
            8-00&nbsp;&nbsp;&nbsp;8-28&nbsp;&nbsp;&nbsp; 8-59<br 
            >&nbsp; 9-40&nbsp; 10-28&nbsp; 11-00<br 
            ></TD>
          <TD>&nbsp; 
            8-05&nbsp;&nbsp;&nbsp;8-35&nbsp;&nbsp;&nbsp; 6-05<br 
            >&nbsp; 9-50&nbsp; 10-35&nbsp; 11-15<br 
            ></TD>
          <TD>&nbsp; 
            9-05&nbsp;&nbsp;&nbsp;9-33&nbsp;&nbsp;&nbsp; 7-30<br 
            >10-50&nbsp; 11-33&nbsp; 12-15</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Малорита 
          <TD>8</TD>
          <TD>пн, сб, вс</TD>
          <TD>10-45</TD>
          <TD>&nbsp;</TD>
          <TD>11-53</TD>
          <TD>9-25</TD>
          <TD>10-26</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Малорита 
          <TD>8</TD>
          <TD>ежедневно</TD>
          <TD>11-05&nbsp; 11-55&nbsp; 12-40<br 
            >13-20</TD>
          <TD>&nbsp;</TD>
          <TD>12-03&nbsp; 12-53&nbsp; 13-40<br 
            >14-20</TD>
          <TD>12-05&nbsp; 13-00&nbsp; 14-00<br 
            >14-40</TD>
          <TD>13-03&nbsp; 13-58&nbsp; 15-00<br 
            >15-40</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Малорита 
          <TD>8</TD>
          <TD>ежедневно</TD>
          <TD>14-10</TD>
          <TD>&nbsp;</TD>
          <TD>15-08</TD>
          <TD>15-10</TD>
          <TD>16-08</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Малорита 
          <TD>8</TD>
          <TD>пн,вт,ср,чт,пт,сб</TD>
          <TD>15-05</TD>
          <TD>&nbsp;</TD>
          <TD>16-03</TD>
          <TD>16-25</TD>
          <TD>17-23</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Малорита 
          <TD>8</TD>
          <TD>вс</TD>
          <TD>15-05</TD>
          <TD>&nbsp;</TD>
          <TD>16-03</TD>
          <TD>16-00</TD>
          <TD>16-58</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Малорита 
          <TD>8</TD>
          <TD>ежедневно</TD>
          <TD>15-30&nbsp; 16-10&nbsp; 16-45</TD>
          <TD>&nbsp;</TD>
          <TD>16-30&nbsp; 17-10&nbsp; 17-45</TD>
          <TD>16-40&nbsp; 17-20&nbsp; 17-50</TD>
          <TD>17-40&nbsp; 18-20&nbsp; 18-50</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Малорита 
          <TD>8</TD>
          <TD>пт</TD>
          <TD>17-45</TD>
          <TD>&nbsp;</TD>
          <TD>18-45</TD>
          <TD>18-50</TD>
          <TD>19-45</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Малорита 
          <TD>8</TD>
          <TD>ежедневно</TD>
          <TD>18-00</TD>
          <TD>&nbsp;</TD>
          <TD>19-15</TD>
          <TD>15-40</TD>
          <TD>16-50</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Малорита 
          <TD>7</TD>
          <TD>ежедневно</TD>
          <TD>18-30</TD>
          <TD>&nbsp;</TD>
          <TD>19-30</TD>
          <TD>19-35</TD>
          <TD>20-35</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Малорита 
          <TD>8</TD>
          <TD>пт</TD>
          <TD>19-05</TD>
          <TD>&nbsp;</TD>
          <TD>20-05</TD>
          <TD>20-10</TD>
          <TD>21-10</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Малорита ч/з Гвозницу 
          <TD>8</TD>
          <TD>ср, пт, сб, вс</TD>
          <TD>&nbsp; 7-20&nbsp; 15-50</TD>
          <TD>&nbsp;</TD>
          <TD>&nbsp; 9-20&nbsp; 17-50</TD>
          <TD>&nbsp; 9-25&nbsp; 17-55</TD>
          <TD>11-26&nbsp; 19-56</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Малорита ч/з Бродятин 
          <TD>8</TD>
          <TD>пн, вт, чт</TD>
          <TD>&nbsp; 7-20&nbsp; 15-50</TD>
          <TD>&nbsp;</TD>
          <TD>&nbsp; 8-53&nbsp; 17-30</TD>
          <TD>&nbsp; 9-25&nbsp; 17-40</TD>
          <TD>11-00&nbsp; 19-20</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Михалин ч/з К.Журавецкую 

          <TD>6</TD>
          <TD>пт, вс</TD>
          <TD>&nbsp; 6-50&nbsp; 18-00</TD>
          <TD>&nbsp; 7-06&nbsp; 18-16</TD>
          <TD>&nbsp; 8-11&nbsp; 19-21</TD>
          <TD>&nbsp; 8-15&nbsp; 19-25</TD>
          <TD>&nbsp; 9-36&nbsp; 20-43</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Мухавец&nbsp; №201 
          <TD>12</TD>
          <TD>пн,вт,ср,чт,пт</TD>
          <TD>&nbsp; 
            7-20&nbsp;&nbsp;&nbsp;8-20&nbsp;&nbsp; 9-50<br 
            >10-40&nbsp; 11-20&nbsp; 12-20<br 
            >14-20&nbsp; 15-20&nbsp; 16-20<br 
            >17-00&nbsp; 17-45&nbsp; 18-45<br 
            >20-00</TD>
          <TD>&nbsp;</TD>
          <TD>&nbsp; 7-50&nbsp;&nbsp;&nbsp;8-50&nbsp; 
            10-20<br>11-10&nbsp; 11-50&nbsp; 12-50<br 
            >14-50&nbsp; 16-00&nbsp; 16-50<br 
            >17-30&nbsp; 18-15&nbsp; 19-15<br 
            >20-30</TD>
          <TD>&nbsp; 
            6-45&nbsp;&nbsp;&nbsp;7-30&nbsp;&nbsp; 8-00<br 
            >&nbsp; 9-00&nbsp; 10-30&nbsp; 11-20<br 
            >12-00&nbsp; 13-00&nbsp; 15-00<br 
            >16-10&nbsp; 17-00&nbsp; 17-45<br 
            >19-25</TD>
          <TD>&nbsp; 
            7-15&nbsp;&nbsp;&nbsp;8-05&nbsp;&nbsp; 8-35<br 
            >&nbsp; 9-35&nbsp; 11-05&nbsp; 11-50<br 
            >12-30&nbsp; 13-30&nbsp; 15-30<br 
            >16-45&nbsp; 17-30&nbsp; 18-25<br 
            >19-55</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Мухавец &nbsp;№201 
          <TD>12</TD>
          <TD>сб, вс<br>и 
            празднич.дни</TD>
          <TD>&nbsp; 8-50&nbsp; 10-15&nbsp; 11-40<br 
            >15-00&nbsp; 16-20&nbsp; 17-45</TD>
          <TD>&nbsp;</TD>
          <TD>&nbsp; 9-20&nbsp; 10-50&nbsp; 12-10<br 
            >15-30&nbsp; 16-50&nbsp; 18-15</TD>
          <TD>&nbsp; 8-00&nbsp;&nbsp;&nbsp;9-30&nbsp; 
            11-00<br>12-20&nbsp; 15-40&nbsp; 17-00<br 
            >18-30</TD>
          <TD>&nbsp; 8-30&nbsp; 10-10&nbsp; 11-30<br 
            >12-50&nbsp; 16-10&nbsp; 17-30<br 
            >19-00</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Мухавец&nbsp; №444<br 
            >ч/з Кам.Журавец.</TD>
          <TD>12</TD>
          <TD>ежедневно</TD>
          <TD>&nbsp; 7-45&nbsp;&nbsp;&nbsp;9-25</TD>
          <TD>&nbsp;</TD>
          <TD>&nbsp; 8-30&nbsp; 10-09</TD>
          <TD>&nbsp; 6-40&nbsp;&nbsp;&nbsp;8-35&nbsp; 
            10-14</TD>
          <TD>&nbsp; 7-30&nbsp;&nbsp;&nbsp;9-20&nbsp; 
            10-53</TD></TR>
        <tr vAlign=baseline align=middle>
        <TR align=middle>
          <td align=left>Брест - Мухавец&nbsp; №444<br 
            >ч/з Кам.Журавец.</TD>
          <td>12</TD>
          <td>пн,вт,ср,чт,пт</TD>
          <td>11-10</TD>
          <td>&nbsp;</TD>
          <td>11-49</TD>
          <td>11-54</TD>
          <td>12-38</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Мухавец&nbsp; №444<br 
            >ч/з Кам.Журавец.</TD>
          <TD>12</TD>
          <TD>ежедневно</TD>
          <TD>15-30</TD>
          <TD>&nbsp;</TD>
          <TD>16-09</TD>
          <TD>16-14</TD>
          <TD>16-53</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Мухавец&nbsp; №444т<br 
            >ч/з Кам.Журавец.</TD>
          <TD>12</TD>
          <TD>пн,вт,ср,чт,пт</TD>
          <TD>&nbsp; 7-55&nbsp; 13-20&nbsp; 15-00<br 
            >17-20&nbsp; 19-10&nbsp; 20-25</TD>
          <TD>&nbsp;</TD>
          <TD>&nbsp; 8-30&nbsp; 13-55&nbsp; 15-40<br 
            >18-00&nbsp; 19-50&nbsp; 20-55</TD>
          <TD>&nbsp; 7-00&nbsp;&nbsp;&nbsp;14-00<br 
            >15-40&nbsp; 18-00&nbsp; 19-50</TD>
          <TD>&nbsp; 7-35&nbsp;&nbsp;&nbsp;14-35<br 
            >16-20&nbsp; 18-35&nbsp; 20-20</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Мухавец&nbsp; №444т<br 
            >ч/з Кам.Журавец.</TD>
          <TD>12</TD>
          <TD>сб, вс<br>и празднич. 
            дни</TD>
          <TD>&nbsp; 8-40&nbsp; 11-00&nbsp; 13-00<br 
            >14-30&nbsp; 17-15&nbsp; 19-10<br 
            >20-25</TD>
          <TD>&nbsp;</TD>
          <TD>&nbsp; 9-10&nbsp; 11-30&nbsp; 13-30<br 
            >15-00&nbsp; 17-45&nbsp; 19-40<br 
            >20-55</TD>
          <TD>&nbsp; 9-20&nbsp; 11-40&nbsp; 13-40<br 
            >15-10&nbsp; 17-55&nbsp; 19-50</TD>
          <TD>&nbsp; 9-50&nbsp; 12-10&nbsp; 14-10<br 
            >15-40&nbsp; 18-35&nbsp; 20-20</TD></TR>
        <tr vAlign=baseline align=middle>
        <TR align=middle>
          <td align=left>Брест-Нехолсты ч/з Клейники</TD>
          <td>3</TD>
          <td>ежедневно</TD>
          <td>7-10&nbsp;&nbsp;&nbsp; 9-40&nbsp;<br 
            >14-30&nbsp;&nbsp;<br 
            >17-10&nbsp; 18-10&nbsp;19-40</TD>
          <td>&nbsp;</TD>
          <td>8-10&nbsp;&nbsp;&nbsp;10-40<br 
            >15-30&nbsp;&nbsp; <br 
            >18-10&nbsp;19-10&nbsp; 20-40</TD>
          <td>&nbsp;&nbsp;&nbsp;8-20&nbsp;&nbsp; 
            10-50&nbsp;&nbsp;&nbsp; 15-50 <br>18-25&nbsp; 
            19-20</TD>
          <td>&nbsp;&nbsp; 9-20&nbsp; <br 
            >11-50&nbsp;&nbsp; 16-50&nbsp;<br 
            >19-25&nbsp; 20-20</TD></TR>
        <tr vAlign=baseline align=middle>
        <TR align=middle>
          <td align=left>Брест-Нехолсты пов. ч/з 
          Тюхиничи</TD>
          <td>3</TD>
          <td>пн,вт,ср,чт,пт</TD>
          <td>&nbsp; 7-00&nbsp;&nbsp; 8-30</TD>
          <td>&nbsp;</TD>
          <td>&nbsp; 7-35&nbsp;&nbsp; 9-05</TD>
          <td>&nbsp; 6-20&nbsp;&nbsp; 7-37</TD>
          <td>&nbsp; 6-55&nbsp;&nbsp; 8-20</TD></TR>
        <tr vAlign=baseline align=middle>
        <TR align=middle>
          <td align=left>Брест-Нехолсты пов. ч/з 
          Тюхиничи</TD>
          <td>3</TD>
          <td>ежедневно</TD>
          <td>10-20&nbsp; 11-52<br 
            >13-25&nbsp; 16-50</TD>
          <td>&nbsp;</TD>
          <td>11-00&nbsp; 12-32<br 
            >14-05&nbsp; 17-30</TD>
          <td>&nbsp; 9-07&nbsp; 11-02&nbsp; 12-34<br 
            >14-07&nbsp; 17-32</TD>
          <td>&nbsp; 9-50&nbsp; 11-47&nbsp; 13-19<br 
            >14-52&nbsp; 18-17</TD></TR>
        <tr vAlign=baseline align=middle>
        <TR align=middle>
          <td align=left>Брест-Нехолсты пов. ч/з 
          Тюхиничи</TD>
          <td>3</TD>
          <td>пн, вт, ср, чт</TD>
          <td>19-00</TD>
          <td>&nbsp;</TD>
          <td>19-35</TD>
          <td>&nbsp;</TD>
          <td>&nbsp;</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Новосады 
          <TD>7</TD>
          <TD>ср, пт</TD>
          <TD>7-45</TD>
          <TD>&nbsp;</TD>
          <TD>9-07</TD>
          <TD>9-07</TD>
          <TD>10-25</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Новосады 
          <TD>7</TD>
          <TD>ср, пт, вс</TD>
          <TD>15-40</TD>
          <TD>&nbsp;</TD>
          <TD>17-02</TD>
          <TD>17-02</TD>
          <TD>18-30</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Н.Заболотье (ч/з Луково) 

          <TD>8</TD>
          <TD>сб</TD>
          <TD>6-45</TD>
          <TD>&nbsp;</TD>
          <TD>8-15</TD>
          <TD>8-20</TD>
          <TD>10-03</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Н.Заболотье (ч/з Луково) 

          <TD>8</TD>
          <TD>вс</TD>
          <TD>14-20</TD>
          <TD>&nbsp;</TD>
          <TD>15-50</TD>
          <TD>15-55</TD>
          <TD>17-38</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Гремяча - Новоселки 
          <TD>2</TD>
          <TD>ср, вс</TD>
          <TD>&nbsp; 6-35&nbsp; 16-25</TD>
          <TD>&nbsp;</TD>
          <TD>&nbsp; 8-04&nbsp; 17-54</TD>
          <TD>&nbsp; 8-05&nbsp; 17-55</TD>
          <TD>&nbsp; 9-39&nbsp; 19-29</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Озяты 
          <TD>6</TD>
          <TD>вт,ср,пт,сб,вс</TD>
          <TD>&nbsp; 8-20&nbsp; 13-25&nbsp; 18-15</TD>
          <TD>&nbsp; 8-33&nbsp; 13-38&nbsp; 18-28</TD>
          <TD>&nbsp; 9-20&nbsp; 14-25&nbsp; 19-15</TD>
          <TD>&nbsp; 9-30&nbsp; 14-40&nbsp; 19-30</TD>
          <TD>10-30&nbsp; 15-30 &nbsp;20-30</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Томашовка - Орхово 
          <TD>7</TD>
          <TD>ежедневно </TD>
          <TD>&nbsp; 6-45&nbsp;&nbsp; 8-00&nbsp; 12-10<br 
            >13-30&nbsp; 16-20&nbsp; 17-30</TD>
          <TD>&nbsp;</TD>
          <TD>&nbsp; 8-09&nbsp;&nbsp; 9-24&nbsp; 13-34<br 
            >14-54&nbsp; 17-44&nbsp; 18-54</TD>
          <TD>&nbsp; 8-16&nbsp;&nbsp; 9-26&nbsp; 13-56<br 
            >15-26&nbsp; 17-56&nbsp; 19-11</TD>
          <TD>&nbsp; 9-40&nbsp;&nbsp; 10-50&nbsp; 
            15-20<br>16-50&nbsp; 19-20&nbsp; 20-35</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест -&nbsp;Орхово ч/з Домачево 

          <TD>7</TD>
          <TD>ежедневно</TD>
          <TD>10-30&nbsp; 19-00</TD>
          <TD>&nbsp;</TD>
          <TD>11-54&nbsp; 20-24</TD>
          <TD>&nbsp; 6-26&nbsp; 11-56</TD>
          <TD>&nbsp; 7-55&nbsp; 12-35</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Остромечево 
          <TD>10</TD>
          <TD>ежедневно</TD>
          <TD>&nbsp; 7-50&nbsp; 12-00<br 
            >15-20&nbsp; 18-00</TD>
          <TD>&nbsp;</TD>
          <TD>&nbsp; 8-25&nbsp; 12-35<br 
            >15-55&nbsp; 18-35</TD>
          <TD>&nbsp; 6-40&nbsp;&nbsp; 8-40<br 
            >12-40&nbsp; 16-00&nbsp; 18-35</TD>
          <TD>&nbsp; 7-15&nbsp;&nbsp; 9-15<br 
            >13-15&nbsp; 16-35&nbsp; 19-10</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Остромечево 
          <TD>2</TD>
          <TD>вт,ср,чт,пт,сб</TD>
          <TD>20-30</TD>
          <TD>&nbsp;</TD>
          <TD>21-00</TD>
          <TD>21-00</TD>
          <TD>21-30</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Пелище 
          <TD>4</TD>
          <TD>по рабоч. дням</TD>
          <TD>6-10</TD>
          <TD>&nbsp;</TD>
          <TD>6-55</TD>
          <TD>7-00</TD>
          <TD>7-45</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Пелище 
          <TD>4</TD>
          <TD>пн,вт,ср,пт,сб</TD>
          <TD>8-10</TD>
          <TD>&nbsp;</TD>
          <TD>&nbsp; 8-55</TD>
          <TD>&nbsp; 9-00</TD>
          <TD>&nbsp; 9-45</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Пелище - Орепичи 
          <TD>4</TD>
          <TD>чт,вс</TD>
          <TD>8-10</TD>
          <TD>&nbsp;</TD>
          <TD>9-02</TD>
          <TD>9-03</TD>
          <TD>9-55</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Пелище 
          <TD>4</TD>
          <TD>ежедневно</TD>
          <TD>11-00&nbsp; 15-20</TD>
          <TD>&nbsp;</TD>
          <TD>11-45&nbsp; 16-05</TD>
          <TD>11-50&nbsp; 16-10</TD>
          <TD>&nbsp;12-35&nbsp; 16-55</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Пелище 
          <TD>4</TD>
          <TD>пн,вт,ср,пт</TD>
          <TD>17-30</TD>
          <TD>&nbsp;</TD>
          <TD>18-15</TD>
          <TD>18-30</TD>
          <TD>19-15</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Пелище 
          <TD>4</TD>
          <TD>сб</TD>
          <TD>17-30</TD>
          <TD>&nbsp;</TD>
          <TD>18-15</TD>
          <TD>18-40</TD>
          <TD>19-25</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Пелище - Орепичи 
          <TD>4</TD>
          <TD>вс</TD>
          <TD>17-30</TD>
          <TD>&nbsp;</TD>
          <TD>18-22</TD>
          <TD>18-23</TD>
          <TD>19-25</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Пелище - Орепичи 
          <TD>4</TD>
          <TD>чт</TD>
          <TD>17-30</TD>
          <TD>&nbsp;</TD>
          <TD>18-22</TD>
          <TD>18-23</TD>
          <TD>19-15</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Привольное с/т 
          <TD>12</TD>
          <TD>сб, вс, праздн.дни</TD>
          <TD>14-20&nbsp; 16-00</TD>
          <TD>14-31&nbsp; 16-11</TD>
          <TD>15-00&nbsp; 16-40</TD>
          <TD>15-00&nbsp; 16-40</TD>
          <TD>15-40&nbsp; 17-20</TD>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Привольное с/т 
          <TD>12</TD>
          <TD><font size=2><strong 
            >&nbsp;до&nbsp; 25/07</STRONG><br 
            ></FONT>пн,вт,ср,чт,пт <br 
            ><font size=2><strong 
            >c 25/07 отменены</STRONG></FONT></TD>
          <TD>14-50 16-30</TD>
          <TD>15-01 16-42</TD>
          <TD>15-30&nbsp; 17-10</TD>
          <TD>15-30&nbsp; 17-10</TD>
          <TD>16-10&nbsp; 17-50</TD>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Каменец - Подбельские 
            Огородники 
          <TD>5</TD>
          <TD>сб</TD>
          <TD>7-50</TD>
          <TD>&nbsp;</TD>
          <TD>9-55</TD>
          <TD>17-05 вс</TD>
          <TD>19-15 вс</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Подлесье ч/з Мухавец 
          <TD>7</TD>
          <TD>ср </TD>
          <TD>&nbsp; 6-30&nbsp; 16-30</TD>
          <TD>&nbsp;</TD>
          <TD>&nbsp; 7-15&nbsp; 17-15</TD>
          <TD>&nbsp; 7-18&nbsp; 17-18</TD>
          <TD>&nbsp; 8-17&nbsp; 18-17</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Подлесье ч/з 
            К.Журавецкую 
          <TD>7</TD>
          <TD>сб, вс</TD>
          <TD>&nbsp; 6-30&nbsp; 16-30</TD>
          <TD>&nbsp; 6-44&nbsp;16-44</TD>
          <TD>&nbsp; 7-21&nbsp; 17-21</TD>
          <TD>&nbsp; 7-24&nbsp; 17-24</TD>
          <TD>&nbsp; 8-28&nbsp; 18-38</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - с/т "Пралеска" 
          <TD>6</TD>
          <TD>вт, чт</TD>
          <TD>&nbsp; 8-00&nbsp; 16-10</TD>
          <TD>8-21 16-31&nbsp; </TD>
          <TD>&nbsp; 8-48&nbsp; 16-58</TD>
          <TD>&nbsp; 8-53&nbsp; 17-03</TD>
          <TD>&nbsp; 9-41&nbsp; 17-51</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Б.Радваничи 
          <TD>6</TD>
          <TD>пн,ср</TD>
          <TD>6-50</TD>
          <TD>7-06</TD>
          <TD>8-04</TD>
          <TD>8-08</TD>
          <TD>9-18</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Б.Радваничи 
          <TD>6</TD>
          <TD>пн,вт,ср,чт,пт,сб</TD>
          <TD>12-40</TD>
          <TD>12-56</TD>
          <TD>13-54</TD>
          <TD>13-58</TD>
          <TD>15-08</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Б.Радваничи 
          <TD>6</TD>
          <TD>пн</TD>
          <TD>18-00</TD>
          <TD>18-16</TD>
          <TD>19-14</TD>
          <TD>19-18</TD>
          <TD>20-28</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Рогозно 
          <TD>7</TD>
          <TD>пн, ср,чт, пт, сб</TD>
          <TD>&nbsp; 8-25</TD>
          <TD>&nbsp;</TD>
          <TD>&nbsp; 9-15</TD>
          <TD>9-30</TD>
          <TD>10-20</TD></TR>
        <tr vAlign=baseline align=middle>
        <TR align=middle>
          <td align=left>Брест - Рогозно </TD>
          <td>7</TD>
          <td>ежедневно</TD>
          <td>11-30</TD>
          <td>&nbsp;</TD>
          <td>12-20</TD>
          <td>13-00</TD>
          <td>13-50</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Рогозно 
          <TD>7</TD>
          <TD>пн,чт,пт,сб,вс</TD>
          <TD>14-30</TD>
          <TD>&nbsp;</TD>
          <TD>15-20</TD>
          <TD>18-00</TD>
          <TD>18-50</TD></TR>
        <tr vAlign=baseline align=middle>
        <TR align=middle>
          <td align=left>Брест - Рогозно </TD>
          <td>7</TD>
          <td>вт, ср</TD>
          <td>14-30</TD>
          <td>&nbsp;</TD>
          <td>15-20</TD>
          <td>15-30</TD>
          <td>16-20</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Рогозно 
          <TD>7</TD>
          <TD>ср</TD>
          <TD>17-40</TD>
          <TD>&nbsp;</TD>
          <TD>18-30</TD>
          <TD>18-40</TD>
          <TD>19-30</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Рогозно 
          <TD>7</TD>
          <TD>пн,чт,пт,сб,вс </TD>
          <TD>19-40</TD>
          <TD>&nbsp;</TD>
          <TD>20-30</TD>
          <TD>7-00</TD>
          <TD>7-50</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест -&nbsp;Рудавец ч/з Непли 
          <TD>1</TD>
          <TD>пн, ср, пт</TD>
          <TD>18-00</TD>
          <TD>&nbsp;</TD>
          <TD>19-06</TD>
          <TD>19-09</TD>
          <TD>20-16</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Рудавец ч/з Костичи 
          <TD>1</TD>
          <TD>вт, чт, сб, вс</TD>
          <TD>18-00</TD>
          <TD>&nbsp;</TD>
          <TD>19-06</TD>
          <TD>19-09</TD>
          <TD>20-16</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Рудка 
          <TD>5</TD>
          <TD>сб </TD>
          <TD>6-50</TD>
          <TD>7-05</TD>
          <TD>8-14</TD>
          <TD>8-19</TD>
          <TD>9-46</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Рудка 
          <TD>6</TD>
          <TD>вс </TD>
          <TD>16-20</TD>
          <TD>16-40</TD>
          <TD>17-49</TD>
          <TD>17-54</TD>
          <TD>19-21</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Смуга 
          <TD>4</TD>
          <TD>пн,вт,ср,чт,пт<br></TD>
          <TD>&nbsp; 7-45&nbsp;&nbsp;&nbsp;9-45&nbsp; 
            14-30<br>16-00</TD>
          <TD></TD>
          <TD>&nbsp; 8-25&nbsp; 10-25&nbsp; 15-10<br 
            >16-40</TD>
          <TD>&nbsp; 6-45&nbsp;&nbsp; 8-30&nbsp; 10-35<br 
            >15-10</TD>
          <TD>&nbsp; 7-25&nbsp;&nbsp;&nbsp;9-10&nbsp; 
            11-15<br>15-50</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Смуга 
          <TD>3</TD>
          <TD>пн,вт,ср,чт,пт</TD>
          <TD>17-45</TD>
          <TD></TD>
          <TD>18-25</TD>
          <TD>16-40</TD>
          <TD>17-20</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Смуга 
          <TD>4</TD>
          <TD>пн,вт,ср,чт,пт</TD>
          <TD>&nbsp; 19-15</TD>
          <TD></TD>
          <TD>&nbsp;19-54</TD>
          <TD>18-25</TD>
          <TD>&nbsp;19-05</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Ст.Село ч/з Ракитницу 
          <TD>6</TD>
          <TD>пн, пт, сб, вс</TD>
          <TD>6-40</TD>
          <TD>6-57</TD>
          <TD>7-40</TD>
          <TD>7-41</TD>
          <TD>9-03</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Ст.Село ч/з Федьковичи 
          <TD>6</TD>
          <TD>пн, пт, сб, вс</TD>
          <TD>16-55</TD>
          <TD>17-12</TD>
          <TD>18-16</TD>
          <TD>18-17</TD>
          <TD>19-18</TD></TR>
        <tr vAlign=baseline align=middle>
        <TR align=middle>
          <td align=left>Брест - Страдечь (рыбхоз) </TD>
          <td>7</TD>
          <td>вт</TD>
          <td>&nbsp; 8-25&nbsp; 17-40</TD>
          <td>&nbsp;</TD>
          <td>&nbsp; 9-25&nbsp; 18-40</TD>
          <td>&nbsp; 9-30&nbsp; 18-40</TD>
          <td>10-35&nbsp; 19-40</TD></TR>
        <tr vAlign=baseline align=middle>
        <TR align=middle>
          <td align=left>Брест - Тельмы-2 </TD>
          <td>2</TD>
          <td>пн,вт,ср,чт,пт</TD>
          <td>10-00 13-20&nbsp; 16-45 19-50</TD>
          <td></TD>
          <td>10-35 13-55&nbsp; 17-20 20-20</TD>
          <td>10-35 13-35 &nbsp;17-20 20-20</TD>
          <td>13-20 14-30 &nbsp;17-55 20-50</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Теребунь 
          <TD>4</TD>
          <TD>сб, вс</TD>
          <TD>14-20</TD>
          <TD>&nbsp;</TD>
          <TD>14-58</TD>
          <TD>15-02</TD>
          <TD>15-40</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Франополь 
          <TD>6</TD>
          <TD>чт</TD>
          <TD>&nbsp; 6-50</TD>
          <TD>&nbsp; 7-06</TD>
          <TD>&nbsp; 8-11</TD>
          <TD>&nbsp; 8-15</TD>
          <TD>&nbsp; 9-32</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Франополь 
          <TD>6</TD>
          <TD>пн,вт,ср,чт,пт,сб</TD>
          <TD>&nbsp; 9-00&nbsp; 17-10</TD>
          <TD></TD>
          <TD>9-50&nbsp; 18-10</TD>
          <TD>&nbsp; 7-00&nbsp; 10-05&nbsp; 18-15</TD>
          <TD>&nbsp; 8-00&nbsp; 11-05&nbsp; 19-15</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Франополь 
          <TD>6</TD>
          <TD>вс</TD>
          <TD>12-40</TD>
          <TD>12-56</TD>
          <TD>14-01</TD>
          <TD>14-05</TD>
          <TD>15-22</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Франополь 
          <TD>6</TD>
          <TD>чт</TD>
          <TD>18-00</TD>
          <TD>18-16</TD>
          <TD>&nbsp; 19-21</TD>
          <TD>19-25</TD>
          <TD>20-42</TD></TR>
        <tr vAlign=baseline align=middle>
        <TR align=middle>
          <td align=left>Брест - Хмелево ч/з Жабинку</TD>
          <td>11</TD>
          <td>сб, вс и праздн.дни</TD>
          <td>&nbsp; 7-30</TD>
          <td>&nbsp; 7-43</TD>
          <td>&nbsp; 8-32</TD>
          <td>&nbsp; 8-40</TD>
          <td>&nbsp; 9-50</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Хмелево ч/з Жабинку 
          <TD>11</TD>
          <TD>пн,вт,ср,чт,пт</TD>
          <TD>8-00</TD>
          <TD>8-13</TD>
          <TD>9-02</TD>
          <TD>9-10</TD>
          <TD>10-20</TD></TR>
        <tr vAlign=baseline align=middle>
        <TR align=middle>
          <td align=left>Брест - Хмелево ч/з Жабинку</TD>
          <td>11</TD>
          <td>сб, вс и праздн.дни</TD>
          <td>10-00</TD>
          <td>10-13</TD>
          <td>11-04</TD>
          <td>11-15</TD>
          <td>12-20</TD></TR>
        <tr vAlign=baseline align=middle>
        <TR align=middle>
          <td align=left>Брест - Хмелево ч/з Жабинку</TD>
          <td>11</TD>
          <td>ежедневно</TD>
          <td>12-40</TD>
          <td>12-53</TD>
          <td>13-42</TD>
          <td>14-00</TD>
          <td>15-10</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Хмелево ч/з&nbsp;Жабинку 

          <TD>11</TD>
          <TD>пн,вт,ср,чт,пт,сб</TD>
          <TD>17-55</TD>
          <TD>18-08</TD>
          <TD>18-57</TD>
          <TD>19-10</TD>
          <TD>20-20</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Хмелево ч/з Чернавчицы 
          <TD>4</TD>
          <TD>сб, вс</TD>
          <TD>&nbsp; 7-25&nbsp; 16-40</TD>
          <TD>&nbsp;</TD>
          <TD>&nbsp; 8-38&nbsp; 17-53</TD>
          <TD>&nbsp; 8-54&nbsp; 17-59</TD>
          <TD>10-30&nbsp; 19-35</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Холмичи 
          <TD>3</TD>
          <TD>сб, вс</TD>
          <TD>&nbsp; 8-55&nbsp; 18-55</TD>
          <TD>&nbsp;</TD>
          <TD>&nbsp; 9-49&nbsp; 19-49</TD>
          <TD>&nbsp; 9-54&nbsp; 19-54</TD>
          <TD>10-49&nbsp; 20-49</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Чернавчицы 
          <TD>5</TD>
          <TD>ежедневно </TD>
          <TD>10-33&nbsp; 11-00<br 
            >14-45&nbsp; 16-15</TD>
          <TD>&nbsp;</TD>
          <TD>11-07&nbsp; 11-35<br 
            >15-20&nbsp; 16-55</TD>
          <TD>&nbsp; 6-13&nbsp; 11-10 &nbsp;11-55<br 
            >15-22&nbsp; 16-57</TD>
          <TD>&nbsp; 6-50&nbsp; 11-49&nbsp; 12-35<br 
            >16-00&nbsp; 17-50</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Чернавчицы 
          <TD>5</TD>
          <TD>пн,вт,ср,чт,пт</TD>
          <TD>&nbsp; 8-05&nbsp;&nbsp; 9-05</TD>
          <TD>&nbsp;</TD>
          <TD>&nbsp; 8-40&nbsp;&nbsp; 9-37</TD>
          <TD>&nbsp; 8-50&nbsp;&nbsp; 9-39</TD>
          <TD>&nbsp; 9-32&nbsp; 10-18</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Шестаково 
          <TD>4</TD>
          <TD>вс</TD>
          <TD>&nbsp; 7-15&nbsp; 17-20</TD>
          <TD>&nbsp;</TD>
          <TD>&nbsp; 8-32&nbsp; 18-37</TD>
          <TD>&nbsp; 8-37&nbsp; 18-42</TD>
          <TD>10-05&nbsp; 20-10</TD></TR>
        <TR vAlign=baseline align=middle>
        <TR align=middle>
          <TD align=left>Брест - Щебрин 
          <TD>3</TD>
          <TD>ежедневно</TD>
          <TD>&nbsp; 6-20&nbsp; 11-20&nbsp; 17-20</TD>
          <TD>&nbsp; 6-35&nbsp; 11-37&nbsp; 17-36</TD>
          <TD>&nbsp; 6-57&nbsp; 12-07&nbsp; 18-07</TD>
          <TD>&nbsp; 7-00&nbsp; 12-10&nbsp; 19-10</TD>
          <TD>&nbsp; 7-45&nbsp; 12-55&nbsp; 
        19-55</TD></TR></TBODY></table></FONT><br 
  ></FONT></TD></TR></TBODY></TABLE></TABLE></DIV></body></html>
`;
