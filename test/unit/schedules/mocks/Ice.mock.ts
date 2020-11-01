export const getSchedule = () => ({
  title: 'Расписание свободного катания',
  subTitle: 'Катание проводится сеансами по 45 минут.',
  additionalInfo: '',
  schedules: [
    {
      date: '23 Окт., Пятница',
      dayOfWeek: '',
      times: [
        {
          start: 'сеансов катания нет (хоккей - экстралига)',
        },
      ],
    },
    {
      date: '24 Окт., Суббота',
      dayOfWeek: '',
      times: [
        {
          start: '21:15',
        },
      ],
    },
    {
      date: '25 Окт., Воскресенье',
      dayOfWeek: '',
      times: [
        {
          start: '18:30',
        },
        {
          start: '21:15',
        },
      ],
    },
    {
      date: '26 Окт., Понедельник',
      dayOfWeek: '',
      times: [
        {
          start: '21:15',
        },
      ],
    },
    {
      date: '27 Окт., Вторник',
      dayOfWeek: '',
      times: [
        {
          start: '21:15',
        },
      ],
    },
    {
      date: '28 Окт., Среда',
      dayOfWeek: '',
      times: [
        {
          start: '21:15',
        },
      ],
    },
    {
      date: '29 Окт., Четверг',
      dayOfWeek: '',
      times: [
        {
          start: '21:15',
        },
      ],
    },
    {
      date: '30 Окт., Пятница',
      dayOfWeek: '',
      times: [
        {
          start: '21:15',
        },
      ],
    },
    {
      date: '31 Окт., Суббота',
      dayOfWeek: '',
      times: [
        {
          start: '21:15',
        },
      ],
    },
    {
      date: '01 Ноя., Воскресенье',
      dayOfWeek: '',
      times: [
        {
          start: '18:45',
        },
        {
          start: '21:15',
        },
      ],
    },
  ],
});

export const getPageMock = () => `
<!DOCTYPE html>
<html lang="ru">
	<head>
		<meta charset="UTF-8">
	    <meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="">
		<meta name="author" content="">
		<meta property="og:title" content="ГУХК 'Брест'">
		<meta content="http://www.brest-hockey.by/img/background/logo-brest.png" property="og:image">
		<title>Хоккейный клуб "Брест"</title>
		<link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
		<link rel="stylesheet" href="css/preloader.css">
		<link rel="stylesheet" href="css/index.css">
		<link rel="stylesheet" href="css/bootstrap-social.css">
		<link rel="stylesheet" href="css/menu.css">
		<link rel="stylesheet" href="css/animate.css">
		<link rel="stylesheet" href="css/slick.css">
		<link rel="stylesheet" href="css/jquery.fancybox.css">
		
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
		<link href="https://fonts.googleapis.com/css?family=Montserrat+Alternates:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i|Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap&subset=cyrillic,cyrillic-ext,latin-ext" rel="stylesheet">  
		<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
		<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
		<!--[if lt IE 9]>
			<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
			<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
		<![endif]-->
	</head>
	
	<body class='body'>
		<div id="preloader">
			<div class="dws-progress-bar"></div>
		</div>
		 <div class ='fansy'>
</div>
<!----------- Расписание свободного катания ---------------->
<div class="modal fade" id="modal-scating-shedule" tabindex="-1" role="dialog" aria-labelledby="modal-scating-shedule" aria-hidden="true">
	<div class="modal-dialog modal-lg" role="document">
		<div class="modal-content modal-content-sch">
			<div class="modal-body">
				<i class="fa-close fa-2x far fa-times-circle" data-dismiss="modal" aria-label="Close"></i>
								<div  class='card schedule-scating animated active-sct'>
					<div class="card card-boton">
						<div class="boton switch-price-sct">
							Кликни, чтобы узнать стоимость услуг 
						</div>
					</div>
					<h5 class="title-reglament ml-2 mt-2">
						<strong><em >Расписание свободного катания</em></strong>
						<footer class="blockquote-footer"><em>Катание проводится сеансами по 45 минут.</em></footer>
					</h5>
					<div class='card-body pl-2 pr-2 pt-2 pb-2'>
						<div class='table-responsive'>
							<table class="table table-scating table-sm mb-1">
								<tr>
									<th class='pl-2'><em>Дата</em></th>
									<th class="text-right"><em>Время начала сеанса</em></th>
								</tr>
																	
								<tr class='none-tr'>
									<td class='align-middle'><b><em class='pl-1'>23</em></b> <small><em>Окт.</em></small>,<small><em> Пятница</em></small></td>
									<td class='text-right'>сеансов катания нет (хоккей - экстралига)</td>
								</tr>
																<tr class=''>
									<td class='align-middle'><b><em class='pl-1'>24</em></b> <small><em>Окт.</em></small>,<small><em> Суббота</em></small>
									</td>
									<td class='text-right'>21:15</td>
								</tr>
																	<tr class='none-tr'>
									<td class='align-middle'><b><em class='pl-1'>25</em></b> <small><em>Окт.</em></small>,<small><em> Воскресенье</em></small>
									</td>
									<td class='text-right'>18:30;   21:15</td>
								</tr>
																<tr class='none-tr' >
									<td class='align-middle'><b><em class='pl-1'>26</em></b> <small><em>Окт.</em></small>,<small><em> Понедельник</em></small></td>
									<td class='text-right'>21:15</td>
								</tr>
																<tr class='none-tr' >
									<td class='align-middle'><b><em class='pl-1'>27</em></b> <small><em>Окт.</em></small>,<small><em> Вторник</em></small></td>
									<td class='text-right'>21:15</td>
								</tr>
																<tr class='none-tr' >
									<td class='align-middle'><b><em class='pl-1'>28</em></b> <small><em>Окт.</em></small>,<small><em> Среда</em></small></td>
									<td class='text-right'>21:15</td>
								</tr>
																<tr class='none-tr'>
									<td class='align-middle'><b><em class='pl-1'>29</em></b> <small><em>Окт.</em></small>,<small><em> Четверг</em></small></td>
									<td class='text-right'>21:15</td>
								</tr>
																<tr class='none-tr' >
									<td class='align-middle'><b><em class='pl-1'>30</em></b> <small><em>Окт.</em></small>,<small><em> Пятница</em></small></td>
									<td class='text-right'>21:15</td>
								</tr>
																<tr class='none-tr' >
									<td class='align-middle'><b><em class='pl-1'>31</em></b> <small><em>Окт.</em></small>,<small><em> Суббота</em></small></td>
									<td class='text-right'>21:15</td>
								</tr>
																<tr class='bg-warning-custom' >
									<td class='align-middle'><b><em class='pl-1'>01</em></b> <small><em>Ноя.</em></small>,<small><em> Воскресенье</em></small></td>
									<td class='text-right'>18:45;   21:15</td>
								</tr>
								<tr>
									<td class='align-middle'>
										<h5 class="title-reglament  mb-0 pl-1 pr-1 pt-1">
											<strong><em >Контактные телефоны</em></strong>
											
										</h5>
									</td>
																		<td  class='text-right align-middle'><strong><em >8(029)509-92-51</em></strong></td>
								</tr>
							</table>
						</div>
					</div>
				</div>
				<div  class='card scating-price animated'>
					<div class="card card-boton">
						<div class="boton switch-schedule-sct ">
							Кликни, чтобы узнать расписание 
						</div>
					</div>
					<h5 class="title-reglament ml-2 mt-2">
						<strong><em >Стоимость проката</em></strong>
						<footer class="blockquote-footer"><em>Катание проводится сеансами по 45 минут.</em></footer>
					</h5>
					<div class='card-body pl-2 pr-2 pt-2 pb-2'>
						<div class='table-responsive'>
							<table class="table table-scating table-sm mb-1">
								<tr>
									<th class='pl-1'><em>Наименование услуги</em></th>
									<th class='text-right pr-1'><em>Цена</em></th>
								</tr>
															<tr>
									<td><small><em>Физкультурно-оздоровительное катание для взрослых без предоставления коньков (сеанс 45 мин.)</em></small></td>
									<td class='text-right'>3,00</td>
								</tr>
																<tr>
									<td><small><em>Физкультурно-оздоровительное катание для детей до 14 лет без предоставления коньков (сеанс 45 мин.)</em></small></td>
									<td class='text-right'>2,30</td>
								</tr>
																<tr>
									<td><small><em>Услуга массового катания для взрослых без предоставления коньков в вечернее время (сеанс 45 мин)</em></small></td>
									<td class='text-right'>4,00</td>
								</tr>
																<tr>
									<td><small><em>Услуга массового катания для детей до 14 лет без предоставления коньков в вечернее время (сеанс 45 мин)</em></small></td>
									<td class='text-right'>3,00</td>
								</tr>
																<tr>
									<td><small><em>Абонемент на катание для взрослых	(8 сеансов)</em></small></td>
									<td class='text-right'>28,00</td>
								</tr>
																<tr>
									<td><small><em>Абонемент на катание для взрослых (сезон)</em></small></td>
									<td class='text-right'>200,00</td>
								</tr>
																<tr>
									<td><small><em>Абонемент на катание для детей (до 14 лет) (8сеансов)</em></small></td>
									<td class='text-right'>20,00</td>
								</tr>
																<tr>
									<td><small><em>Покат одной пары коньков хоккейных, фигурных (сроком использования до 1 года)</em></small></td>
									<td class='text-right'>4,30</td>
								</tr>
																<tr>
									<td><small><em>Покат одной пары коньков хоккейных, фигурных для взрослых</em></small></td>
									<td class='text-right'>3,30</td>
								</tr>
																<tr>
									<td><small><em>Покат одной пары коньков хоккейных, фигурных для детей до 14 лет</em></small></td>
									<td class='text-right'>2,80</td>
								</tr>
																<tr>
									<td  class='align-middle'>
										<h5 class="title-reglament  mb-0 pl-1 pr-1 pt-1">
											<strong><em >Контактные телефоны</em></strong>
											
										</h5>
									</td>
									
									<td  class='text-right align-middle'><strong><em >8(029)509-92-51</em></strong></td>
								</tr>
							</table>
						</div>
					</div>
				</div>
								<!--div  class='card'>
										<h5 class="alert alert-success title-reglament text-muted mb-0 pl-1 pr-1 pt-1">
						<strong><em ></em></strong>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</h5>
					<div class='card-body pl-1 pr-1 pt-1 pb-1'>
						<blockquote class="blockquote">
							<p class="mb-0 ml-2 mr-2"></p>
						</blockquote>
					</div>
				</div--->	
							</div>
		</div>
	</div>
</div>
<!------------------------------------- Сауна ----------------------------------------------------->
<div class="modal fade" id="modal-sauna" tabindex="-1" role="dialog" aria-labelledby="modal-fitnes" aria-hidden="true">
	<div class="modal-dialog modal-lg" role="document">
		<div class="modal-content">
			<div class="modal-body ">
				<i class="fa-close fa-2x far fa-times-circle" data-dismiss="modal" aria-label="Close"></i>
				<div class='card sauna-session active-sct animated'>
					<div class="card card-boton">
						<div class="boton switch-price-sauna">
							Кликни, чтобы узнать стоимость услуг 
						</div>
					</div>
					<h5 class="title-reglament ml-2">
						<strong><em >Сауна</em></strong>
						<footer class="blockquote-footer"><em>Расписание сеансов</em></footer>
					</h5>
					<div class='card-body pl-1 pr-1 pt-1 pb-1'>
						<div class='table-responsive'>
							<table class="table table-sauna table-sm mb-1">
																<tr>
									<td class="align-middle">1-й сеанc</td>
									<td class='text-right align-middle'>11:00 - 13:00  Пн, Вт, Чт-Вс 
             </td>
								</tr>
																<tr>
									<td class="align-middle"></td>
									<td class='text-right align-middle'>10:00 - 12:00  Ср                 </td>
								</tr>
																<tr>
									<td class="align-middle">2-й сеанс</td>
									<td class='text-right align-middle'>13:30 - 15:30 Пн, Вт, Чт-Вс</td>
								</tr>
																<tr>
									<td class="align-middle"></td>
									<td class='text-right align-middle'>12:30 - 14:30 Ср   </td>
								</tr>
																<tr>
									<td class="align-middle">3-й сеанc</td>
									<td class='text-right align-middle'>16:00 - 18:00 Пн, Вт, Чт-Вс  </td>
								</tr>
																<tr>
									<td class="align-middle"></td>
									<td class='text-right align-middle'>17:30 - 19:30 Ср  </td>
								</tr>
																<tr>
									<td class="align-middle">5-й сеанс</td>
									<td class='text-right align-middle'>21:23 - 23:00 Пн, Вт, Чт-Вс</td>
								</tr>
																<tr>
									<td class="align-middle"></td>
									<td class='text-right align-middle'>15:00 - 17:00 Ср  </td>
								</tr>
																<tr>
									<td class="align-middle">4-й сеанс</td>
									<td class='text-right align-middle'>18:30 - 20:30 Пн, Вт, Чт-Вс</td>
								</tr>
																<tr>
									<td class="align-middle"></td>
									<td class='text-right align-middle'>20:00 - 22:00 Ср</td>
								</tr>
																<tr>
									<td class='align-middle'>
										<h5 class="title-reglament  mb-0 pl-1 pr-1 pt-1">
											<strong><em >Контактные телефоны</em></strong>
										</h5>
									</td>
										
									<td  class='text-right align-middle'><strong><em >8(029)509-92-51</em></strong></td>
								</tr>
							</table>
						</div>
					</div>
				</div>
				<div class='card sauna-price animated'>
					<div class="card card-boton">
						<div class="boton switch-schedule-sauna">
							Кликни, чтобы узнать расписание сеансов 
						</div>
					</div>
					<h5 class="ml-2">
						<strong><em >Сауна</em></strong>
						<footer class="blockquote-footer"><em>Стоимость услуг</em></footer>
					</h5>
					<div class='card-body pl-1 pr-1 pt-1 pb-1'>
						<div class='table-responsive'>
							<table class="table  table-sauna table-sm mb-1">
																<tr>
									<td class="align-middle">Стоимость услуги "Баня" (1 час)</td>
									<td class='text-right align-middle'>20,75</td>
								</tr>
																<tr>
									<td class="align-middle">Стоимость услуги "Баня" (2 часа)</td>
									<td class='text-right align-middle'>41,50</td>
								</tr>
																<tr>
									<td class="align-middle">Абонемент на посещение бани (сеанс 2 часа * 4 посещения)</td>
									<td class='text-right align-middle'>149,50</td>
								</tr>
																<tr>
									<td class="align-middle">Прокат одной простыни (при посещении бани)</td>
									<td class='text-right align-middle'>1,50</td>
								</tr>
																<tr>
									<td class='align-middle'>
										<h5 class="title-reglament  mb-0 pl-1 pr-1 pt-1">
											<strong><em >Контактные телефоны</em></strong>
										</h5>
									</td>
									
									<td  class='text-right align-middle'><strong><em >8(029)509-92-51</em></strong></td>
								</tr>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<!----------------------- Обслуживание коньков --------------------------------------------->
<div class="modal fade" id="modal-sharpening-skates" tabindex="-1" role="dialog" aria-labelledby="modal-sharpening-skates" aria-hidden="true">
	<div class="modal-dialog modal-lg" role="document">
		<div class="modal-content">
			<div class="modal-body pl-1 pr-1 pb-1 pt-1">
				<i class="fa-close fa-2x far fa-times-circle" data-dismiss="modal" aria-label="Close"></i>
				<div class='card service-scating-price'>
					<h5 class="ml-2">
						<strong><em >Обслуживание коньков</em></strong>
						<!--footer class="blockquote-footer">Время работы: <em>11:00 - 22:00</em></footer-->
					</h5>
					<div class='card-body pl-2 pr-2 pt-2 pb-2'>
						<div class='table-responsive'>
							<table class="table table-sm mb-1 table-fitnes">
								<tr >
									<th class="align-middle">Наименование услуги</em></th>
									<th class='text-right align-middle'><em>Цена</em></th>
								</tr>
																<tr>
									<td class="align-middle">Заточка коньков</td>
									<td class='text-right align-middle'>6,00</td>
								</tr>
																<tr>
									<td class="align-middle">Заточка коньков для учащихся СДЮШОР по хоккею с шайбой и фигурному катанию</td>
									<td class='text-right align-middle'>3,00</td>
								</tr>
																<tr>
									<td class="align-middle">Срочная заточка коньков</td>
									<td class='text-right align-middle'>7,00</td>
								</tr>
																<tr>
									<td class="align-middle">Замена лопнувшего лезвия конька</td>
									<td class='text-right align-middle'>3,00</td>
								</tr>
																<tr>
									<td class="align-middle">Замена заклепок на коньках (1 шт.)</td>
									<td class='text-right align-middle'>1,50</td>
								</tr>
																<tr>
									<td class="align-middle">Замена лопнувшего стакана конька</td>
									<td class='text-right align-middle'>12,00</td>
								</tr>
																<tr>
									<td class="align-middle">
										<h5 class="ml-2"><strong><em >Контактные телефоны:</em></strong></h5>
									</td>
									<td class='text-right align-middle'>
										<strong><em >8(029)509-92-51</em></strong>
									</td>
								</tr>
								
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<!------- ЕРИП ------------------>
<div id="modal-payment" class="modal fade">
	<div class="modal-dialog modal-lg">
		<div class="modal-content">
			<div class="modal-header card-header">
				<h2 class="modal-title">Оплата через систему "Расчёт" (ЕРИП)</h2>
				<button class="close btn-close" type="button" data-dismiss="modal">×</button>
			</div>
			<div class="modal-body">
				<p>В любом удобном для Вас месте, в удобное для Вас время, в  удобном для Вас пункте банковского обслуживания - интернет-банке, с помощью мобильного банкинга, инфокиоске, кассе банков, банкомате и.т.д.</br>Совершить оплату можно с использованием наличных денежных средств, электронных денег и банковских платёжных карточек в пунктах банковского обслуживания банков, которые оказывают услуги по приёму платежей, а также
				посредством инструментов дистанционного банковского обслуживания.</p>
				<hr></hr>
				<h3 class="text-center">Для проведения платежа необходимо:</h3>
				<ol>
					<li>Оплата услуг:
						<ul>
							<li ><a href="https://raschet.by/platelshchikam/poisk-uslugi-v-dereve-uslug-punkty-soversheniya-platezhey/" target="_blank" >Перейти по ссылки </a></li>
							<li>Билеты, лотереи</li>
							<li>Спорт и физическое развитие</li>
							<li>Спортивные школы,клубы</li>
							<li>Брестская обл. </li>
							<li>Хоккейный клуб "Брест"</li>
							<li>Оплата услуг</li>
						</ul>
					</li>
					
					<li>Покупка билетов на хоккейный матч:
						<ul>
							<li ><a href="https://raschet.by/platelshchikam/poisk-uslugi-v-dereve-uslug-punkty-soversheniya-platezhey/" target="_blank" >Перейти по ссылки </a></li>
							<li>Билеты, лотереи</li>
							<li>Зрелищные, спортивные мероприятия</li>
							<li>ХК "Брест" - оплата билетов</li>
						</ul>
					</li>
					<li>Для оплаты ввести номер заказа (номер заказа можно узнать по тел. 8(029)509-92-51-администратор)</li>
					
				</ol>
				<p>Если Вы осуществляете платёж в кассе банка, пожайлуста, сообщите кассиру о необходимости проведения платежа через систему "Расчёт" (ЕРИП)</br>
				Техническое взаимодействие с системой "Расчёт" (ЕРИП) осуществляется  помощью сервиса "Экспресс Платежи"</p>
			</div>
			<div class='card-footer'>
					<a href="https://express-pay.by" target="_blank">https://express-pay.by</a></br>
					 Телефон для справок: <b>53-29-90</b>, <b>МТС (029)509-92-51</b>
			</div>
		</div>
	</div>
</div>
<!------------------------------------- Прокат ----------------------------------------------------->
<div class="modal fade" id="modal-rent" tabindex="-1" role="dialog" aria-labelledby="modal-rent" aria-hidden="true">
	<div class="modal-dialog modal-lg" role="document">
		<div class="modal-content">
			<div class="modal-body pl-1 pr-1 pb-1 pt-1">
				<i class="fa-close fa-2x far fa-times-circle" data-dismiss="modal" aria-label="Close"></i>
				<div class='card rent-price'>
					<h5 class="ml-2">
						<strong><em >Прокат</em></strong>
						<!--footer class="blockquote-footer">Время работы: <em>11:00 - 22:00</em></footer-->
					</h5>
					<div class='card-body pl-2 pr-2 pt-2 pb-2'>
						<div class='table-responsive'>
							<table class="table table-sm mb-1 table-fitnes">
								<tr >
									<th class="align-middle">Наименование услуги</em></th>
									<th class='text-right align-middle'><em>Цена</em></th>
								</tr>
																<tr>
									<td class="align-middle">Палатки: Домик-4,Тайга-4,Мещера-4 / 4-х местные (1 сутки)</td>
									<td class='text-right align-middle'>7,10</td>
								</tr>
																<tr>
									<td class="align-middle">Палатки: Домик-3, Тайга-3 / 3-х местные (1 сутки)</td>
									<td class='text-right align-middle'>4,20</td>
								</tr>
																<tr>
									<td class="align-middle">Палатки: Домик-2, Дуговая Микрон-2 / 2-х местные (1 сутки)</td>
									<td class='text-right align-middle'>4,20</td>
								</tr>
																<tr>
									<td class="align-middle">Рюкзаки: Коломбо-30, Таежный-40, Полевой-15 (1 сутки)</td>
									<td class='text-right align-middle'>1,35</td>
								</tr>
																<tr>
									<td class="align-middle">Рюкзаки: Скаут-80, Пионер-75, Скаут (1 сутки)</td>
									<td class='text-right align-middle'>3,80</td>
								</tr>
																<tr>
									<td class="align-middle">Спальные мешки (1 сутки)</td>
									<td class='text-right align-middle'>4,50</td>
								</tr>
																<tr>
									<td class="align-middle">Стул складной, стул рыбацкий (1сутки)</td>
									<td class='text-right align-middle'>2,10</td>
								</tr>
																<tr>
									<td class="align-middle">Коврик туристический (1сутки)</td>
									<td class='text-right align-middle'>2,10</td>
								</tr>
																<tr>
									<td class="align-middle">Тент туристический (1сутки) </td>
									<td class='text-right align-middle'>7,15</td>
								</tr>
																<tr>
									<td class="align-middle">Прокат велосипеда Cube Aim Pro (1час)</td>
									<td class='text-right align-middle'>5,00</td>
								</tr>
																<tr>
									<td class="align-middle">Прокат велосипеда Cube Aim Pro (1 сутки)</td>
									<td class='text-right align-middle'>20,00</td>
								</tr>
																<tr>
									<td class="align-middle">
										<h5 class="ml-2"><strong><em >Контактные телефоны:</em></strong></h5>
									</td>
									<td class='text-right align-middle'>
										<strong><em >53-77-19, 8(029)509-92-51</em></strong>
									</td>
								</tr>
								
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<!------------------------------------- Тарифы ----------------------------------------------------->
<div class="modal fade" id="modal-rates" tabindex="-1" role="dialog" aria-labelledby="modal-rent" aria-hidden="true">
	<div class="modal-dialog modal-lg" role="document">
		<div class="modal-content">
			<div class="modal-body pl-1 pr-1 pb-1 pt-1">
				<i class="fa-close fa-2x far fa-times-circle" data-dismiss="modal" aria-label="Close"></i>
				<div class='card rent-price'>
					<h5 class="ml-2">
						<strong><em >Прокат</em></strong>
						<!--footer class="blockquote-footer">Время работы: <em>11:00 - 22:00</em></footer-->
					</h5>
					<div class='card-body pl-2 pr-2 pt-2 pb-2'>
						<div class='table-responsive'>
							<table class="table table-sm mb-1 table-fitnes">
								<tr >
									<th class="align-middle">Наименование услуги</em></th>
									<th class='text-right align-middle'><em>Цена</em></th>
								</tr>
																<tr>
									<td class="align-middle">Игра в настольный теннис (30 мин.)</td>
									<td class='text-right align-middle'>1,20</td>
								</tr>
																<tr>
									<td class="align-middle">Игра в настольный теннис (1час)</td>
									<td class='text-right align-middle'>2,40</td>
								</tr>
																<tr>
									<td class="align-middle">Услуга бильярда (30 мин.)</td>
									<td class='text-right align-middle'>1.50</td>
								</tr>
																<tr>
									<td class="align-middle">Услуга бильярда (1час)</td>
									<td class='text-right align-middle'>3,00</td>
								</tr>
																<tr>
									<td class="align-middle">Билет на хоккейные матч (взрослый)</td>
									<td class='text-right align-middle'>3.50</td>
								</tr>
																<tr>
									<td class="align-middle">Билет на хоккейные матч (для военнослужащих срочной службы)</td>
									<td class='text-right align-middle'>1.40</td>
								</tr>
																<tr>
									<td class="align-middle">Абонемент на хоккейные матчи (сезон) для взрослых</td>
									<td class='text-right align-middle'>50.00</td>
								</tr>
																<tr>
									<td class="align-middle">Программки хоккейные (1 шт.)</td>
									<td class='text-right align-middle'>0.35</td>
								</tr>
																<tr>
									<td class="align-middle">Услуга ледовой арены (15 мин.)</td>
									<td class='text-right align-middle'>60.00</td>
								</tr>
																<tr>
									<td class="align-middle">Услуга ледовой арены (45 мин.)</td>
									<td class='text-right align-middle'>180.00</td>
								</tr>
																<tr>
									<td class="align-middle">Услуга ледовой арены (1 час)</td>
									<td class='text-right align-middle'>240.00</td>
								</tr>
																<tr>
									<td class="align-middle">Услуга ледовой арены для проведения тренировок по хоккею с шайбой любительскими командами (30 мин.)</td>
									<td class='text-right align-middle'>75.00</td>
								</tr>
																<tr>
									<td class="align-middle">Услуга ледовой арены для проведения тренировок по хоккею с шайбой любительскими командами (45 мин.)</td>
									<td class='text-right align-middle'>112.00</td>
								</tr>
																<tr>
									<td class="align-middle">Услуга ледовой арены для проведения тренировок по хоккею с шайбой любительскими командами (1 час)</td>
									<td class='text-right align-middle'>150.00</td>
								</tr>
																<tr>
									<td class="align-middle">Услуга ледовой арены для проведения тренировок по хоккею с шайбой любительскими командами (1 час 15 мин.)</td>
									<td class='text-right align-middle'>187.00</td>
								</tr>
																<tr>
									<td class="align-middle">Услуга ледовой арены для организации учебно-тренировочных сборов на базе учреждения (1 час)</td>
									<td class='text-right align-middle'>260.00</td>
								</tr>
																<tr>
									<td class="align-middle">Услуга по оформлению фойе 2 этажа для проведения торжественных мероприятий (1час)</td>
									<td class='text-right align-middle'>400.00</td>
								</tr>
																<tr>
									<td class="align-middle">Услуга по подготовке арены к проведению культурно-массового мероприятия (монтаж, демонтаж защитного ограждения ледовой арены) </td>
									<td class='text-right align-middle'>270.00</td>
								</tr>
																<tr>
									<td class="align-middle">Стоимость услуг автобуса SCANIA-IRIZAR K114 (1 час )</td>
									<td class='text-right align-middle'>16,50</td>
								</tr>
																<tr>
									<td class="align-middle">Стоимость 1 км пробега автобуса SCANIA-IRIZAR K114</td>
									<td class='text-right align-middle'>1.40</td>
								</tr>
																<tr>
									<td class="align-middle">Стоимость услуг автобуса МАЗ за 1 час </td>
									<td class='text-right align-middle'>14.50</td>
								</tr>
																<tr>
									<td class="align-middle">Стоимость 1 км пробега автобуса МАЗ </td>
									<td class='text-right align-middle'>1.30</td>
								</tr>
																<tr>
									<td class="align-middle">Стоимость 1 км пробега автобуса "W-Каравелла АК 1110-1"</td>
									<td class='text-right align-middle'>0,80</td>
								</tr>
																<tr>
									<td class="align-middle">Входной билет в Ледовый дворец и на ледовую арену (для родителей, сопровождающих детей до 11 лет)</td>
									<td class='text-right align-middle'>0,55</td>
								</tr>
																<tr>
									<td class="align-middle">
										<h5 class="ml-2"><strong><em >Контактные телефоны:</em></strong></h5>
									</td>
									<td class='text-right align-middle'>
										<strong><em >8(029)509-92-51</em></strong>
									</td>
								</tr>
								
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
		 <div class="container-fluid container-menu">
	<div class="row">
		<div class="col-lg-12  pl-0 pr-0 col-header-lg">
			<div class="container">
				<div class="row">
					<div class="col-lg-2 col-md-2 col-sm-2 col-2 text-right">
						<div class="wrap-logo">
							<a class="navbar-brand navbar-brand-custom text-white mt-0" href="index.php">
								<img class="logo" src="img/background/logo-brest.png" class="d-inline-block" alt="brest-hockey.by">
							</a>
						</div>
					</div>
					<div class="col-lg-10 col-md-8 col-sm-8 col-8 text-center">
						<span class="header-large"><h3 class="h3-menu" >Государственное учреждение </br> "Хоккейный клуб "Брест"</h3></span>
						<span class="header-small"><h3 class="h3-menu" > ГУХK "Брест"</h3></span>
					</div>
					<div class=" col-sm-2 col-2 wrap-icon-gam ">
						<div class="icon nav-icon-1 navbar-toggler" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="container-fluid nav-large container-menu">
	<div class="container container-menu">
		<div class="row">
			<div class="col-lg-12">
				<nav class="top-menu" >
					<ul class="menu-main">
						<li class="dropdown">
							<a class="nav-link dropdown-toggle" href="#" id="navbar-team" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Команда</a>
							<div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbar-team">
								<a class="dropdown-item" target="_blank" href ="http://brest.hockey.by/players/" >ХК "Брест"</a>
								<a class="dropdown-item" target="_blank" href ="http://brest.hockey.by/coaches/" >Тренерский состав ХК "Брест"</a>
								<a class="dropdown-item" target="_blank" href ="http://brest.hockey.by/farm-klub/igroki/" >ХК "Брест-2"</a>
								<a class="dropdown-item" target="_blank" href ="http://brest.hockey.by/farm-klub/trenery/" >Тренерский состав ХК "Брест-2"</a>
							</div>	
						</li>
						<li class="">
							<a class="nav-link" href="school.php">Школа</a>
						</li>
						<li class="">
							<a class="nav-link" href="contacts.php">Контакты</a>
						</li>
						<li class="">
							<a class="nav-link"  href="sauna.php">Сауна</a>
						</li>
						<li>
							<a class="dropdown-custom" href="fitnes.php">Тренажёрный зал</a>
						</li>
						
					</ul>
					<ul class="menu-main-second-lvl">
						<li>
							<a class="dropdown-item"  data-toggle="modal" data-target="#modal-scating-shedule"  href="#">	
								Расписание свободного катания
							</a>
						</li>
						<li>
							<a class="dropdown-item btn-schedule-area"  data-fancybox data-type="ajax" data-src="handlers/schedule-area.php" href="javascript:;" >
								Расписание ледовой арены
							</a>
						</li>
						<li class=" dropdown">
							<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownPortfolio" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Услуги и тарифы</a>
							<div class="dropdown-menu" aria-labelledby="navbarDropdownPortfolio">
								<a class="dropdown-item"  data-toggle="modal" data-target 	= "#modal-sharpening-skates" href="#">Обслуживание коньков</a>
								<a class="dropdown-item"  data-toggle="modal" data-target 	= "#modal-rent" href="#">Прокат</a>
								<a class="dropdown-item"  data-toggle="modal" data-target 	= "#modal-rates"  href="#">Тарифы</a>
							</div>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
</div>
<div class="collapse navbar-collapse" id="navbarResponsive">
	<ul class="navbar-nav ml-auto navbar-custom-mobile">
		<li class="nav-item dropdown nav-item-custom ">
			<a class="dropdown-toggle dropdown-custom" href="#" id="navbar-team" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Команда</a>
			<div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbar-team">
				<a class="dropdown-item" target="_blank" href ="http://brest.hockey.by/players/" >ХК "Брест"</a>
				<a class="dropdown-item" target="_blank" href ="http://brest.hockey.by/coaches/" >Тренерский состав ХК "Брест"</a>
				<a class="dropdown-item" target="_blank" href ="http://brest.hockey.by/farm-klub/igroki/" >ХК "Брест-2"</a>
				<a class="dropdown-item" target="_blank" href ="http://brest.hockey.by/farm-klub/trenery/" >Тренерский состав ХК "Брест-2"</a>
			</div>	
		</li>
		<li class="nav-item nav-item-custom">
			<a class="dropdown-custom" data-toggle="modal" data-target="#modal-scating-shedule"  href="#">	
			Расписание свободного катания
			</a>
		</li>
		<li class="nav-item nav-item-custom" >
			<a class="dropdown-custom btn-schedule-area"  data-fancybox data-type="ajax" data-src="handlers/schedule-area.php" href="javascript:;" >
			Расписание ледовой арены
			</a>
		</li>
		
		<li class="nav-item nav-item-custom">
			<a class="dropdown-custom" href="school.php">Школа</a>
		</li>
		<li class="nav-item nav-item-custom">
			<a class="dropdown-custom" href="contacts.php">Контакты</a>
		</li>
		<li class="nav-item nav-item-custom">
			<a class="dropdown-custom" href="sauna.php">Сауна</a>
		</li>
		<li class="nav-item nav-item-custom">
			<a class="dropdown-custom" href="fitnes.php">Тренажёрный зал</a>
		</li>
		<li class="nav-item dropdown nav-item-custom">
			<a class="dropdown-custom dropdown-toggle" href="#" id="navbarDropdownPortfolio" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Услуги</a>
			<div class="dropdown-menu dropdown-menu-right" aria-labelledby	="navbarDropdownPortfolio">
				<a class="dropdown-item"  data-toggle="modal" data-target 	= "#modal-sharpening-skates" href="#">Обслуживание коньков</a>
				<a class="dropdown-item"  data-toggle="modal" data-target 	= "#modal-rent" href="#">Прокат</a>
				<a class="dropdown-item"  data-toggle="modal" data-target 	= "#modal-rates"  href="#">Тарифы</a>
			</div>
		</li>
	</ul>
</div>
		 <div class="inner-schedule">
	<div class="slick-new-schedule">
					<div class="section-hsc">
			
							<div class="hsc-league">Высшая лига</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/8087f3626b199a025b321d7e7cb0e168-100x100.jpg">
						<span class="hsc-team-name">Шахтер-2</span>
													<span class="hsc-team-points"></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"></span>
											</div>
														</div>
				<div class="hsc-date">Пн, 00 00 0000г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="9">
							<div class="hsc-league">Кубок Руслана Салея Группа "Б"</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>4</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/3be6ae0b48f873eebac05dbd21dfbaaf-100x100.jpg">
						<span class="hsc-team-name">Шахтер-Солигорск</span>
													<span class="hsc-team-points"><b>5</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/159/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Чт, 01 Авг. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="8">
							<div class="hsc-league">Кубок Руслана Салея Группа "Б"</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/89af14f825f3e5e8bd51e8bff9bc9f4d-100x100.jpg">
						<span class="hsc-team-name">Витебск</span>
													<span class="hsc-team-points"><b>1</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>7</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/167/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Сб, 03 Авг. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="6">
							<div class="hsc-league">Кубок Руслана Салея Группа "Б"</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/0310c14eafbd9488df8bf507d248fb94-100x100.jpg">
						<span class="hsc-team-name">Химик</span>
													<span class="hsc-team-points"><b>4</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>2</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/177/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Пн, 05 Авг. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="5">
							<div class="hsc-league">Кубок Руслана Салея Группа "Б"</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>2</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/3a4a629406e9fe530eb1656b07ff77e6-100x100.jpg">
						<span class="hsc-team-name">U18</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
										<div class="hsc-match-extd">
						<div class="hsc-match-circle">Пб</div>
					</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/187/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Ср, 07 Авг. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="5">
							<div class="hsc-league">Кубок Руслана Салея Группа "Б"</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/2f1e00375631a6c2a7ec3dfe123e586e-100x100.jpg">
						<span class="hsc-team-name">Лида</span>
													<span class="hsc-team-points"><b>2</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/196/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Сб, 10 Авг. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="6">
							<div class="hsc-league">Кубок Руслана Салея Группа "Б"</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/42a24f07b43c2275256aa891ccb6dff6-100x100.jpg">
						<span class="hsc-team-name">Динамо-Молодечно</span>
													<span class="hsc-team-points"><b>5</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>1</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/213/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Ср, 14 Авг. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="3">
							<div class="hsc-league">Дивизион"Б" 1 этап</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>1</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/032bab26fa9f9f4ea914566b84480856-100x100.jpg">
						<span class="hsc-team-name">Бобруйск</span>
													<span class="hsc-team-points"><b>2</b></span>
											</div>
										<div class="hsc-match-extd">
						<div class="hsc-match-circle">ОТ</div>
					</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/228/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Вт, 27 Авг. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="3">
							<div class="hsc-league">Дивизион"Б" 1 этап</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>0</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/eedee46e09770f84f4fbc1dbb8c74698-100x100.jpg">
						<span class="hsc-team-name">Локомотив-Орша</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/239/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Чт, 29 Авг. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="5">
							<div class="hsc-league">Высшая лига</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/9137ae3d536897f7a9bd55a8256add57-100x100.jpg">
						<span class="hsc-team-name">Металлург-2</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>2</b></span>
											</div>
										<div class="hsc-match-extd">
						<div class="hsc-match-circle">Пб</div>
					</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/248/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Вос, 01 Сен. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="4">
							<div class="hsc-league">Высшая лига</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/9137ae3d536897f7a9bd55a8256add57-100x100.jpg">
						<span class="hsc-team-name">Металлург-2</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>1</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/254/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Пн, 02 Сен. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="4">
							<div class="hsc-league">Дивизион"Б" 1 этап</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/2677121efdf4f9b9d046373994454887-100x100.jpg">
						<span class="hsc-team-name">U20</span>
													<span class="hsc-team-points"><b>1</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/256/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Пн, 02 Сен. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="6">
							<div class="hsc-league">Дивизион"Б" 1 этап</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/3a4a629406e9fe530eb1656b07ff77e6-100x100.jpg">
						<span class="hsc-team-name">U18</span>
													<span class="hsc-team-points"><b>4</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>2</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/264/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Вт, 03 Сен. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="7">
							<div class="hsc-league">Высшая лига</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>4</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/e1f3cdfbd5b3d13e98748e71c07de1ff-100x100.jpg">
						<span class="hsc-team-name">Гомель-2</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/282/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Вос, 08 Сен. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="6">
							<div class="hsc-league">Высшая лига</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>5</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/e1f3cdfbd5b3d13e98748e71c07de1ff-100x100.jpg">
						<span class="hsc-team-name">Гомель-2</span>
													<span class="hsc-team-points"><b>1</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/283/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Пн, 09 Сен. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="7">
							<div class="hsc-league">Дивизион"Б" 1 этап</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>4</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/50bd80110b1b7aaf51711e4f34a317c3-100x100.jpg">
						<span class="hsc-team-name">Авиатор</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
										<div class="hsc-match-extd">
						<div class="hsc-match-circle">Пб</div>
					</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/292/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Вт, 10 Сен. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="1">
							<div class="hsc-league">Дивизион"Б" 1 этап</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/0310c14eafbd9488df8bf507d248fb94-100x100.jpg">
						<span class="hsc-team-name">Химик</span>
													<span class="hsc-team-points"><b>0</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>1</b></span>
											</div>
										<div class="hsc-match-extd">
						<div class="hsc-match-circle">Пб</div>
					</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/297/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Чт, 12 Сен. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="7">
							<div class="hsc-league">Дивизион"Б" 1 этап</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/89af14f825f3e5e8bd51e8bff9bc9f4d-100x100.jpg">
						<span class="hsc-team-name">Витебск</span>
													<span class="hsc-team-points"><b>2</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>5</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/305/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Пт, 13 Сен. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="7">
							<div class="hsc-league">Высшая лига</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a3a88ecbb7b2358679379ee5e867cc6c-100x100.jpg">
						<span class="hsc-team-name">Могилев-2</span>
													<span class="hsc-team-points"><b>5</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>2</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/315/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Вос, 15 Сен. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="7">
							<div class="hsc-league">Высшая лига</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a3a88ecbb7b2358679379ee5e867cc6c-100x100.jpg">
						<span class="hsc-team-name">Могилев-2</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>4</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/320/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Пн, 16 Сен. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="10">
							<div class="hsc-league">Дивизион"Б" 1 этап</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/50bd80110b1b7aaf51711e4f34a317c3-100x100.jpg">
						<span class="hsc-team-name">Авиатор</span>
													<span class="hsc-team-points"><b>4</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>6</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/310/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Пн, 16 Сен. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="3">
							<div class="hsc-league">Дивизион"Б" 1 этап</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>2</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/0310c14eafbd9488df8bf507d248fb94-100x100.jpg">
						<span class="hsc-team-name">Химик</span>
													<span class="hsc-team-points"><b>1</b></span>
											</div>
										<div class="hsc-match-extd">
						<div class="hsc-match-circle">ОТ</div>
					</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/334/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Чт, 19 Сен. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="3">
							<div class="hsc-league">Дивизион"Б" 1 этап</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>2</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/89af14f825f3e5e8bd51e8bff9bc9f4d-100x100.jpg">
						<span class="hsc-team-name">Витебск</span>
													<span class="hsc-team-points"><b>1</b></span>
											</div>
										<div class="hsc-match-extd">
						<div class="hsc-match-circle">ОТ</div>
					</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/338/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Пт, 20 Сен. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="3">
							<div class="hsc-league">Дивизион"Б" 1 этап</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>0</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/50bd80110b1b7aaf51711e4f34a317c3-100x100.jpg">
						<span class="hsc-team-name">Авиатор</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/344/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Вос, 22 Сен. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="7">
							<div class="hsc-league">Высшая лига</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/ef112def9945addf56ce6e06fc61abbc-100x100.jpg">
						<span class="hsc-team-name">Химик-2</span>
													<span class="hsc-team-points"><b>4</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/375/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Сб, 28 Сен. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="6">
							<div class="hsc-league">Высшая лига</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>2</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/ef112def9945addf56ce6e06fc61abbc-100x100.jpg">
						<span class="hsc-team-name">Химик-2</span>
													<span class="hsc-team-points"><b>4</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/376/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Вос, 29 Сен. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="6">
							<div class="hsc-league">Дивизион"Б" 1 этап</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>5</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/2677121efdf4f9b9d046373994454887-100x100.jpg">
						<span class="hsc-team-name">U20</span>
													<span class="hsc-team-points"><b>1</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/412/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Пн, 30 Сен. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="9">
							<div class="hsc-league">Дивизион"Б" 1 этап</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>5</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/3a4a629406e9fe530eb1656b07ff77e6-100x100.jpg">
						<span class="hsc-team-name">U18</span>
													<span class="hsc-team-points"><b>4</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/416/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Ср, 02 Окт. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="4">
							<div class="hsc-league">Дивизион"Б" 1 этап</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/eedee46e09770f84f4fbc1dbb8c74698-100x100.jpg">
						<span class="hsc-team-name">Локомотив-Орша</span>
													<span class="hsc-team-points"><b>1</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/428/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Вос, 06 Окт. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="5">
							<div class="hsc-league">Высшая лига</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/e22f00e802b233f661a91ba25cbfe0d4-100x100.jpg">
						<span class="hsc-team-name">U17</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>2</b></span>
											</div>
										<div class="hsc-match-extd">
						<div class="hsc-match-circle">ОТ</div>
					</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/397/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Вт, 08 Окт. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="6">
							<div class="hsc-league">Дивизион"Б" 1 этап</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/032bab26fa9f9f4ea914566b84480856-100x100.jpg">
						<span class="hsc-team-name">Бобруйск</span>
													<span class="hsc-team-points"><b>1</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>5</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/432/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Вт, 08 Окт. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="6">
							<div class="hsc-league">Высшая лига</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/e22f00e802b233f661a91ba25cbfe0d4-100x100.jpg">
						<span class="hsc-team-name">U17</span>
													<span class="hsc-team-points"><b>1</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>5</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/398/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Ср, 09 Окт. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="3">
							<div class="hsc-league">----</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>1</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/032bab26fa9f9f4ea914566b84480856-100x100.jpg">
						<span class="hsc-team-name">Бобруйск</span>
													<span class="hsc-team-points"><b>2</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/444/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Вос, 13 Окт. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="11">
							<div class="hsc-league">Высшая лига</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/2ed5c3b2a6fd13f5492baa5b5b884a4d-100x100.jpg">
						<span class="hsc-team-name">Лида-2</span>
													<span class="hsc-team-points"><b>6</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>5</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/405/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Вос, 13 Окт. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="9">
							<div class="hsc-league">Высшая лига</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/2ed5c3b2a6fd13f5492baa5b5b884a4d-100x100.jpg">
						<span class="hsc-team-name">Лида-2</span>
													<span class="hsc-team-points"><b>6</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/406/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Пн, 14 Окт. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="3">
							<div class="hsc-league">Дивизион"Б" 1 этап</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>0</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/eedee46e09770f84f4fbc1dbb8c74698-100x100.jpg">
						<span class="hsc-team-name">Локомотив-Орша</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/449/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Пн, 14 Окт. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="2">
							<div class="hsc-league">Дивизион"Б" 1 этап</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/50bd80110b1b7aaf51711e4f34a317c3-100x100.jpg">
						<span class="hsc-team-name">Авиатор</span>
													<span class="hsc-team-points"><b>0</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>2</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/458/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Чт, 17 Окт. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="7">
							<div class="hsc-league">Дивизион"Б" 1 этап</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/3a4a629406e9fe530eb1656b07ff77e6-100x100.jpg">
						<span class="hsc-team-name">U18</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>4</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/460/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Сб, 19 Окт. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="3">
							<div class="hsc-league">Дивизион"Б" 1 этап</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/2677121efdf4f9b9d046373994454887-100x100.jpg">
						<span class="hsc-team-name">U20</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>0</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/469/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Пн, 21 Окт. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="5">
							<div class="hsc-league">Высшая лига</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/59318256f7a0edddcf85d9e45cbc3ec6-100x100.jpg">
						<span class="hsc-team-name">Бобруйск-2</span>
													<span class="hsc-team-points"><b>1</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>4</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/490/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Ср, 23 Окт. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="7">
							<div class="hsc-league">Высшая лига</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/59318256f7a0edddcf85d9e45cbc3ec6-100x100.jpg">
						<span class="hsc-team-name">Бобруйск-2</span>
													<span class="hsc-team-points"><b>2</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>5</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/491/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Чт, 24 Окт. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="5">
							<div class="hsc-league">Высшая лига</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>2</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/fe55d7868b286908bdb83fd64e799d29-100x100.jpg">
						<span class="hsc-team-name">Юниор</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/508/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Пн, 28 Окт. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="5">
							<div class="hsc-league">Высшая лига</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>4</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/fe55d7868b286908bdb83fd64e799d29-100x100.jpg">
						<span class="hsc-team-name">Юниор</span>
													<span class="hsc-team-points"><b>1</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/509/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Вт, 29 Окт. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="7">
							<div class="hsc-league">Дивизион"Б" 1 этап</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/0310c14eafbd9488df8bf507d248fb94-100x100.jpg">
						<span class="hsc-team-name">Химик</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>4</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/516/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Ср, 30 Окт. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="6">
							<div class="hsc-league">Дивизион"Б" 1 этап</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/89af14f825f3e5e8bd51e8bff9bc9f4d-100x100.jpg">
						<span class="hsc-team-name">Витебск</span>
													<span class="hsc-team-points"><b>2</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>4</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/524/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Чт, 31 Окт. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="4">
							<div class="hsc-league">Дивизион"Б" 1 этап</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/ed3b1e1c961ec768966d5a98c1ee3e7b-100x100.jpg">
						<span class="hsc-team-name">Пинские Ястребы</span>
													<span class="hsc-team-points"><b>1</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/534/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Вос, 03 Ноя. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="7">
							<div class="hsc-league">Высшая лига</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/e99d9e38d97174072ba33ddff2886291-100x100.jpg">
						<span class="hsc-team-name">Витебск-2</span>
													<span class="hsc-team-points"><b>5</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>2</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/544/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Пн, 04 Ноя. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="8">
							<div class="hsc-league">Высшая лига</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/e99d9e38d97174072ba33ddff2886291-100x100.jpg">
						<span class="hsc-team-name">Витебск-2</span>
													<span class="hsc-team-points"><b>6</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>2</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/545/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Вт, 05 Ноя. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="5">
							<div class="hsc-league">Дивизион"Б" 1 этап</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>1</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/0310c14eafbd9488df8bf507d248fb94-100x100.jpg">
						<span class="hsc-team-name">Химик</span>
													<span class="hsc-team-points"><b>4</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/554/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Ср, 06 Ноя. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="6">
							<div class="hsc-league">Дивизион"Б" 1 этап</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>5</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/89af14f825f3e5e8bd51e8bff9bc9f4d-100x100.jpg">
						<span class="hsc-team-name">Витебск</span>
													<span class="hsc-team-points"><b>1</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/555/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Чт, 07 Ноя. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="6">
							<div class="hsc-league">Дивизион"Б" 1 этап</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/ed3b1e1c961ec768966d5a98c1ee3e7b-100x100.jpg">
						<span class="hsc-team-name">Пинские Ястребы</span>
													<span class="hsc-team-points"><b>1</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>5</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/556/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Вос, 10 Ноя. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="3">
							<div class="hsc-league">Высшая лига</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>1</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/8087f3626b199a025b321d7e7cb0e168-100x100.jpg">
						<span class="hsc-team-name">Шахтер-2</span>
													<span class="hsc-team-points"><b>2</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/563/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Вос, 10 Ноя. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="5">
							<div class="hsc-league">Высшая лига</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/8087f3626b199a025b321d7e7cb0e168-100x100.jpg">
						<span class="hsc-team-name">Шахтер-2</span>
													<span class="hsc-team-points"><b>2</b></span>
											</div>
										<div class="hsc-match-extd">
						<div class="hsc-match-circle">Пб</div>
					</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/564/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Пн, 11 Ноя. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="5">
							<div class="hsc-league">Дивизион"Б" 1 этап</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/2677121efdf4f9b9d046373994454887-100x100.jpg">
						<span class="hsc-team-name">U20</span>
													<span class="hsc-team-points"><b>2</b></span>
											</div>
										<div class="hsc-match-extd">
						<div class="hsc-match-circle">ОТ</div>
					</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/588/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Сб, 16 Ноя. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="10">
							<div class="hsc-league">Высшая лига</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/6c34cd8ff26a2958c66e669036ad4fb7-100x100.jpg">
						<span class="hsc-team-name">Неман-2</span>
													<span class="hsc-team-points"><b>7</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/634/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Пн, 18 Ноя. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="10">
							<div class="hsc-league">Дивизион"Б" 1 этап</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>7</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/3a4a629406e9fe530eb1656b07ff77e6-100x100.jpg">
						<span class="hsc-team-name">U18</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/608/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Пн, 18 Ноя. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="3">
							<div class="hsc-league">Высшая лига</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/6c34cd8ff26a2958c66e669036ad4fb7-100x100.jpg">
						<span class="hsc-team-name">Неман-2</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>0</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/635/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Вт, 19 Ноя. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="8">
							<div class="hsc-league">Дивизион"Б" 1 этап</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/032bab26fa9f9f4ea914566b84480856-100x100.jpg">
						<span class="hsc-team-name">Бобруйск</span>
													<span class="hsc-team-points"><b>2</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>6</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/610/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Чт, 21 Ноя. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="1">
							<div class="hsc-league">Дивизион"Б" 1 этап</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/eedee46e09770f84f4fbc1dbb8c74698-100x100.jpg">
						<span class="hsc-team-name">Локомотив-Орша</span>
													<span class="hsc-team-points"><b>1</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>0</b></span>
											</div>
										<div class="hsc-match-extd">
						<div class="hsc-match-circle">Пб</div>
					</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/616/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Сб, 23 Ноя. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="3">
							<div class="hsc-league">Высшая лига</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/d69c6fce6b985c1c478c88c5ddfe8e7d-100x100.jpg">
						<span class="hsc-team-name">Минские зубры</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>0</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/658/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Вос, 24 Ноя. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="5">
							<div class="hsc-league">Высшая лига</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/d69c6fce6b985c1c478c88c5ddfe8e7d-100x100.jpg">
						<span class="hsc-team-name">Минские зубры</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>2</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/659/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Пн, 25 Ноя. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="4">
							<div class="hsc-league">Дивизион"Б" 1 этап</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/ed3b1e1c961ec768966d5a98c1ee3e7b-100x100.jpg">
						<span class="hsc-team-name">Пинские Ястребы</span>
													<span class="hsc-team-points"><b>1</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/619/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Вт, 26 Ноя. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="4">
							<div class="hsc-league">Дивизион"Б" 1 этап</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/ed3b1e1c961ec768966d5a98c1ee3e7b-100x100.jpg">
						<span class="hsc-team-name">Пинские Ястребы</span>
													<span class="hsc-team-points"><b>4</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>0</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/622/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Чт, 28 Ноя. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="5">
							<div class="hsc-league">Переходной турнир</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/eedee46e09770f84f4fbc1dbb8c74698-100x100.jpg">
						<span class="hsc-team-name">Локомотив-Орша</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>2</b></span>
											</div>
										<div class="hsc-match-extd">
						<div class="hsc-match-circle">ОТ</div>
					</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/667/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Пн, 02 Дек. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="9">
							<div class="hsc-league">Переходной турнир</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/964b3c1c93b0ba760d6be503d889da1c-100x100.jpg">
						<span class="hsc-team-name">Могилев</span>
													<span class="hsc-team-points"><b>2</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>7</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/672/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Ср, 04 Дек. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="7">
							<div class="hsc-league">Переходной турнир</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/0310c14eafbd9488df8bf507d248fb94-100x100.jpg">
						<span class="hsc-team-name">Химик</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>4</b></span>
											</div>
										<div class="hsc-match-extd">
						<div class="hsc-match-circle">ОТ</div>
					</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/682/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Пт, 06 Дек. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="5">
							<div class="hsc-league">Высшая лига</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>2</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/6c34cd8ff26a2958c66e669036ad4fb7-100x100.jpg">
						<span class="hsc-team-name">Неман-2</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/692/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Сб, 07 Дек. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="3">
							<div class="hsc-league">Высшая лига</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>2</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/6c34cd8ff26a2958c66e669036ad4fb7-100x100.jpg">
						<span class="hsc-team-name">Неман-2</span>
													<span class="hsc-team-points"><b>1</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/693/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Вос, 08 Дек. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="10">
							<div class="hsc-league">Высшая лига</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/8087f3626b199a025b321d7e7cb0e168-100x100.jpg">
						<span class="hsc-team-name">Шахтер-2</span>
													<span class="hsc-team-points"><b>10</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>0</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/713/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Вос, 15 Дек. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="5">
							<div class="hsc-league">Высшая лига</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/8087f3626b199a025b321d7e7cb0e168-100x100.jpg">
						<span class="hsc-team-name">Шахтер-2</span>
													<span class="hsc-team-points"><b>5</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>0</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/714/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Пн, 16 Дек. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="5">
							<div class="hsc-league">Переходной турнир</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/2f1e00375631a6c2a7ec3dfe123e586e-100x100.jpg">
						<span class="hsc-team-name">Лида</span>
													<span class="hsc-team-points"><b>2</b></span>
											</div>
										<div class="hsc-match-extd">
						<div class="hsc-match-circle">ОТ</div>
					</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/844/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Пн, 16 Дек. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="7">
							<div class="hsc-league">Переходной турнир</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/ed3b1e1c961ec768966d5a98c1ee3e7b-100x100.jpg">
						<span class="hsc-team-name">Пинские Ястребы</span>
													<span class="hsc-team-points"><b>4</b></span>
											</div>
										<div class="hsc-match-extd">
						<div class="hsc-match-circle">ОТ</div>
					</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/858/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Пт, 20 Дек. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="9">
							<div class="hsc-league">Высшая лига</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>4</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/e99d9e38d97174072ba33ddff2886291-100x100.jpg">
						<span class="hsc-team-name">Витебск-2</span>
													<span class="hsc-team-points"><b>5</b></span>
											</div>
										<div class="hsc-match-extd">
						<div class="hsc-match-circle">ОТ</div>
					</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/727/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Вос, 22 Дек. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="7">
							<div class="hsc-league">Высшая лига</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>2</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/e99d9e38d97174072ba33ddff2886291-100x100.jpg">
						<span class="hsc-team-name">Витебск-2</span>
													<span class="hsc-team-points"><b>5</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/728/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Пн, 23 Дек. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="3">
							<div class="hsc-league">Переходной турнир</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/ed3b1e1c961ec768966d5a98c1ee3e7b-100x100.jpg">
						<span class="hsc-team-name">Пинские Ястребы</span>
													<span class="hsc-team-points"><b>1</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>2</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/862/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Пн, 23 Дек. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="5">
							<div class="hsc-league">Переходной турнир</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/2f1e00375631a6c2a7ec3dfe123e586e-100x100.jpg">
						<span class="hsc-team-name">Лида</span>
													<span class="hsc-team-points"><b>4</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>1</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/867/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Ср, 25 Дек. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="5">
							<div class="hsc-league">Высшая лига</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/fe55d7868b286908bdb83fd64e799d29-100x100.jpg">
						<span class="hsc-team-name">Юниор</span>
													<span class="hsc-team-points"><b>4</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>1</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/735/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Вос, 29 Дек. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="7">
							<div class="hsc-league">Высшая лига</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/fe55d7868b286908bdb83fd64e799d29-100x100.jpg">
						<span class="hsc-team-name">Юниор</span>
													<span class="hsc-team-points"><b>6</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>1</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/736/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Пн, 30 Дек. 2019г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="2">
							<div class="hsc-league">Высшая лига</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>2</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/59318256f7a0edddcf85d9e45cbc3ec6-100x100.jpg">
						<span class="hsc-team-name">Бобруйск-2</span>
													<span class="hsc-team-points"><b>0</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/745/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Сб, 04 Янв. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="6">
							<div class="hsc-league">Высшая лига</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>4</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/59318256f7a0edddcf85d9e45cbc3ec6-100x100.jpg">
						<span class="hsc-team-name">Бобруйск-2</span>
													<span class="hsc-team-points"><b>2</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/746/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Вос, 05 Янв. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="7">
							<div class="hsc-league">Переходной турнир</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>4</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/eedee46e09770f84f4fbc1dbb8c74698-100x100.jpg">
						<span class="hsc-team-name">Локомотив-Орша</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
										<div class="hsc-match-extd">
						<div class="hsc-match-circle">Пб</div>
					</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/886/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Пн, 06 Янв. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="6">
							<div class="hsc-league">Переходной турнир</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>2</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/0310c14eafbd9488df8bf507d248fb94-100x100.jpg">
						<span class="hsc-team-name">Химик</span>
													<span class="hsc-team-points"><b>4</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/889/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Ср, 08 Янв. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="3">
							<div class="hsc-league">Переходной турнир</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>1</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/964b3c1c93b0ba760d6be503d889da1c-100x100.jpg">
						<span class="hsc-team-name">Могилев</span>
													<span class="hsc-team-points"><b>2</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/894/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Пт, 10 Янв. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="12">
							<div class="hsc-league">Высшая лига</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>10</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/2ed5c3b2a6fd13f5492baa5b5b884a4d-100x100.jpg">
						<span class="hsc-team-name">Лида-2</span>
													<span class="hsc-team-points"><b>2</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/757/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Сб, 11 Янв. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<div class="hsc-league">Высшая лига</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/2ed5c3b2a6fd13f5492baa5b5b884a4d-100x100.jpg">
						<span class="hsc-team-name">Лида-2</span>
													<span class="hsc-team-points"></span>
											</div>
														</div>
				<div class="hsc-date">Вос, 12 Янв. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="5">
							<div class="hsc-league">Переходной турнир</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/0310c14eafbd9488df8bf507d248fb94-100x100.jpg">
						<span class="hsc-team-name">Химик</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>2</b></span>
											</div>
										<div class="hsc-match-extd">
						<div class="hsc-match-circle">ОТ</div>
					</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/902/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Пн, 13 Янв. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="6">
							<div class="hsc-league">Переходной турнир</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/964b3c1c93b0ba760d6be503d889da1c-100x100.jpg">
						<span class="hsc-team-name">Могилев</span>
													<span class="hsc-team-points"><b>2</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>4</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/904/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Ср, 15 Янв. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="4">
							<div class="hsc-league">Переходной турнир</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/eedee46e09770f84f4fbc1dbb8c74698-100x100.jpg">
						<span class="hsc-team-name">Локомотив-Орша</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>1</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/911/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Пт, 17 Янв. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="6">
							<div class="hsc-league">Высшая лига</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>2</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/e22f00e802b233f661a91ba25cbfe0d4-100x100.jpg">
						<span class="hsc-team-name">U17</span>
													<span class="hsc-team-points"><b>4</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/775/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Сб, 18 Янв. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="4">
							<div class="hsc-league">Высшая лига</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>1</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/e22f00e802b233f661a91ba25cbfe0d4-100x100.jpg">
						<span class="hsc-team-name">U17</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/776/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Вос, 19 Янв. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="5">
							<div class="hsc-league">Переходной турнир</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>5</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/ed3b1e1c961ec768966d5a98c1ee3e7b-100x100.jpg">
						<span class="hsc-team-name">Пинские Ястребы</span>
													<span class="hsc-team-points"><b>0</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/918/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Пн, 20 Янв. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="7">
							<div class="hsc-league">Переходной турнир</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>4</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/2f1e00375631a6c2a7ec3dfe123e586e-100x100.jpg">
						<span class="hsc-team-name">Лида</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/927/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Пт, 24 Янв. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="6">
							<div class="hsc-league">Высшая лига</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/ef112def9945addf56ce6e06fc61abbc-100x100.jpg">
						<span class="hsc-team-name">Химик-2</span>
													<span class="hsc-team-points"><b>4</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>2</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/789/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Пн, 27 Янв. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="9">
							<div class="hsc-league">Переходной турнир</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/ed3b1e1c961ec768966d5a98c1ee3e7b-100x100.jpg">
						<span class="hsc-team-name">Пинские Ястребы</span>
													<span class="hsc-team-points"><b>5</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>4</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/933/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Пн, 27 Янв. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="5">
							<div class="hsc-league">Высшая лига</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/ef112def9945addf56ce6e06fc61abbc-100x100.jpg">
						<span class="hsc-team-name">Химик-2</span>
													<span class="hsc-team-points"><b>5</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>0</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/790/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Вт, 28 Янв. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="5">
							<div class="hsc-league">Переходной турнир</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/2f1e00375631a6c2a7ec3dfe123e586e-100x100.jpg">
						<span class="hsc-team-name">Лида</span>
													<span class="hsc-team-points"><b>4</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>1</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/942/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Пт, 31 Янв. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="7">
							<div class="hsc-league">Переходной турнир</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/964b3c1c93b0ba760d6be503d889da1c-100x100.jpg">
						<span class="hsc-team-name">Могилев</span>
													<span class="hsc-team-points"><b>4</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/963/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Пн, 03 Фев. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="7">
							<div class="hsc-league">Переходной турнир</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/eedee46e09770f84f4fbc1dbb8c74698-100x100.jpg">
						<span class="hsc-team-name">Локомотив-Орша</span>
													<span class="hsc-team-points"><b>4</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/966/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Ср, 05 Фев. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="9">
							<div class="hsc-league">Высшая лига</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a3a88ecbb7b2358679379ee5e867cc6c-100x100.jpg">
						<span class="hsc-team-name">Могилев-2</span>
													<span class="hsc-team-points"><b>6</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/805/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Вос, 09 Фев. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="2">
							<div class="hsc-league">Высшая лига</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>2</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a3a88ecbb7b2358679379ee5e867cc6c-100x100.jpg">
						<span class="hsc-team-name">Могилев-2</span>
													<span class="hsc-team-points"><b>0</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/806/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Пн, 10 Фев. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="7">
							<div class="hsc-league">Переходной турнир</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>6</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/2f1e00375631a6c2a7ec3dfe123e586e-100x100.jpg">
						<span class="hsc-team-name">Лида</span>
													<span class="hsc-team-points"><b>1</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/1015/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Ср, 12 Фев. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="9">
							<div class="hsc-league">Переходной турнир</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/964b3c1c93b0ba760d6be503d889da1c-100x100.jpg">
						<span class="hsc-team-name">Могилев</span>
													<span class="hsc-team-points"><b>5</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>4</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/1017/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Пт, 14 Фев. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="8">
							<div class="hsc-league">Переходной турнир</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/ed3b1e1c961ec768966d5a98c1ee3e7b-100x100.jpg">
						<span class="hsc-team-name">Пинские Ястребы</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>5</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/1022/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Вос, 16 Фев. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="7">
							<div class="hsc-league">Высшая лига</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/e1f3cdfbd5b3d13e98748e71c07de1ff-100x100.jpg">
						<span class="hsc-team-name">Гомель-2</span>
													<span class="hsc-team-points"><b>4</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
										<div class="hsc-match-extd">
						<div class="hsc-match-circle">ОТ</div>
					</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/825/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Вос, 16 Фев. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="7">
							<div class="hsc-league">Высшая лига</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/e1f3cdfbd5b3d13e98748e71c07de1ff-100x100.jpg">
						<span class="hsc-team-name">Гомель-2</span>
													<span class="hsc-team-points"><b>5</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>2</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/826/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Пн, 17 Фев. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="7">
							<div class="hsc-league">Переходной турнир</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>4</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/0310c14eafbd9488df8bf507d248fb94-100x100.jpg">
						<span class="hsc-team-name">Химик</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/1024/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Ср, 19 Фев. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="3">
							<div class="hsc-league">Переходной турнир</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/eedee46e09770f84f4fbc1dbb8c74698-100x100.jpg">
						<span class="hsc-team-name">Локомотив-Орша</span>
													<span class="hsc-team-points"><b>1</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>2</b></span>
											</div>
										<div class="hsc-match-extd">
						<div class="hsc-match-circle">ОТ</div>
					</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/1027/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Пт, 21 Фев. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="4">
							<div class="hsc-league">Высшая лига</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>1</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/9137ae3d536897f7a9bd55a8256add57-100x100.jpg">
						<span class="hsc-team-name">Металлург-2</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/833/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Вос, 23 Фев. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="11">
							<div class="hsc-league">Высшая лига</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>7</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/9137ae3d536897f7a9bd55a8256add57-100x100.jpg">
						<span class="hsc-team-name">Металлург-2</span>
													<span class="hsc-team-points"><b>4</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/834/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Пн, 24 Фев. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="6">
							<div class="hsc-league">Товарищеский матч</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/85d4c7802f065963f55bdaebec8a8a4e-100x100.jpg">
						<span class="hsc-team-name">Нёман</span>
													<span class="hsc-team-points"><b>5</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>1</b></span>
											</div>
														</div>
				<div class="hsc-date">Чт, 23 Июл. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="6">
							<div class="hsc-league">Товарищеский матч</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/42a24f07b43c2275256aa891ccb6dff6-100x100.jpg">
						<span class="hsc-team-name">Динамо-Молодечно</span>
													<span class="hsc-team-points"><b>4</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>2</b></span>
											</div>
														</div>
				<div class="hsc-date">Ср, 29 Июл. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="4">
							<div class="hsc-league">Товарищеский матч</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/3be6ae0b48f873eebac05dbd21dfbaaf-100x100.jpg">
						<span class="hsc-team-name">Шахтер-Солигорск</span>
													<span class="hsc-team-points"><b>4</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>0</b></span>
											</div>
														</div>
				<div class="hsc-date">Чт, 30 Июл. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="4">
							<div class="hsc-league">Кубок Салея (группа "А")</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>1</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/bec74b34b8c810ec5aff92a7b0e4606a-100x100.jpg">
						<span class="hsc-team-name">Металлург</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
														</div>
				<div class="hsc-date">Сб, 08 Авг. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="5">
							<div class="hsc-league">Кубок Салея (группа "А")</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/0310c14eafbd9488df8bf507d248fb94-100x100.jpg">
						<span class="hsc-team-name">Химик</span>
													<span class="hsc-team-points"><b>2</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/gamecenter/111172/">статистика</a>
									</div>
				<div class="hsc-date">Вт, 18 Авг. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="6">
							<div class="hsc-league">Кубок Салея (группа "А")</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/89af14f825f3e5e8bd51e8bff9bc9f4d-100x100.jpg">
						<span class="hsc-team-name">Витебск</span>
													<span class="hsc-team-points"><b>4</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>2</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/gamecenter/111196/">статистика</a>
									</div>
				<div class="hsc-date">Чт, 20 Авг. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="4">
							<div class="hsc-league">Кубок Салея (группа "А")</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/50bd80110b1b7aaf51711e4f34a317c3-100x100.jpg">
						<span class="hsc-team-name">Авиатор</span>
													<span class="hsc-team-points"><b>1</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/gamecenter/111202/">статистика</a>
									</div>
				<div class="hsc-date">Сб, 22 Авг. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="1">
							<div class="hsc-league">Кубок Салея (группа "А")</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/f4cbb129e7e08be5df5c44197b2027f3-100x100.jpg">
						<span class="hsc-team-name">Гомель</span>
													<span class="hsc-team-points"><b>1</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>0</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/gamecenter/111532/">статистика</a>
									</div>
				<div class="hsc-date">Пн, 24 Авг. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="3">
							<div class="hsc-league">Кубок Салея (группа "А")</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>0</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/3be6ae0b48f873eebac05dbd21dfbaaf-100x100.jpg">
						<span class="hsc-team-name">Шахтер-Солигорск</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/gamecenter/111931/#game-tab-5">статистика</a>
									</div>
				<div class="hsc-date">Ср, 26 Авг. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="6">
							<div class="hsc-league">Высшая лига - 2020/21</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/8087f3626b199a025b321d7e7cb0e168-100x100.jpg">
						<span class="hsc-team-name">Шахтер-2</span>
													<span class="hsc-team-points"><b>5</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>1</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/gamecenter/113216/">статистика</a>
									</div>
				<div class="hsc-date">Вт, 08 Сен. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="5">
							<div class="hsc-league">Высшая лига - 2020/21</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/8087f3626b199a025b321d7e7cb0e168-100x100.jpg">
						<span class="hsc-team-name">Шахтер-2</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>2</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/gamecenter/113218/#game-tab-4">статистика</a>
									</div>
				<div class="hsc-date">Ср, 09 Сен. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="9">
							<div class="hsc-league">Высшая лига - 2020/21</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/ef112def9945addf56ce6e06fc61abbc-100x100.jpg">
						<span class="hsc-team-name">Химик-2</span>
													<span class="hsc-team-points"><b>6</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/gamecenter/113594/">статистика</a>
									</div>
				<div class="hsc-date">Вос, 13 Сен. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="7">
							<div class="hsc-league">Высшая лига - 2020/21</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>5</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/ef112def9945addf56ce6e06fc61abbc-100x100.jpg">
						<span class="hsc-team-name">Химик-2</span>
													<span class="hsc-team-points"><b>2</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/gamecenter/113596/">статистика</a>
									</div>
				<div class="hsc-date">Пн, 14 Сен. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="3">
							<div class="hsc-league">Экстралига  - 2020 / 21 - Дивизион "Б"</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/89af14f825f3e5e8bd51e8bff9bc9f4d-100x100.jpg">
						<span class="hsc-team-name">Витебск</span>
													<span class="hsc-team-points"><b>0</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/gamecenter/113902/">статистика</a>
									</div>
				<div class="hsc-date">Ср, 16 Сен. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="7">
							<div class="hsc-league">Экстралига  - 2020 / 21 - Дивизион "Б"</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/0310c14eafbd9488df8bf507d248fb94-100x100.jpg">
						<span class="hsc-team-name">Химик</span>
													<span class="hsc-team-points"><b>4</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/gamecenter/113906/">статистика</a>
									</div>
				<div class="hsc-date">Пт, 18 Сен. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="6">
							<div class="hsc-league">Высшая лига - 2020/21</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/9137ae3d536897f7a9bd55a8256add57-100x100.jpg">
						<span class="hsc-team-name">Металлург-2</span>
													<span class="hsc-team-points"><b>5</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>1</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/gamecenter/113966/">статистика</a>
									</div>
				<div class="hsc-date">Вос, 20 Сен. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="6">
							<div class="hsc-league">Высшая лига - 2020/21</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/9137ae3d536897f7a9bd55a8256add57-100x100.jpg">
						<span class="hsc-team-name">Металлург-2</span>
													<span class="hsc-team-points"><b>5</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>1</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/gamecenter/113968/">статистика</a>
									</div>
				<div class="hsc-date">Пн, 21 Сен. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="3">
							<div class="hsc-league">Экстралига  - 2020 / 21 - Дивизион "Б"</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>2</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/2f1e00375631a6c2a7ec3dfe123e586e-100x100.jpg">
						<span class="hsc-team-name">Лида</span>
													<span class="hsc-team-points"><b>1</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/gamecenter/113916/">статистика</a>
									</div>
				<div class="hsc-date">Ср, 23 Сен. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="4">
							<div class="hsc-league">Экстралига  - 2020 / 21 - Дивизион "Б"</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/3a4a629406e9fe530eb1656b07ff77e6-100x100.jpg">
						<span class="hsc-team-name">U18</span>
													<span class="hsc-team-points"><b>1</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/gamecenter/114128/">статистика</a>
									</div>
				<div class="hsc-date">Пт, 25 Сен. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="4">
							<div class="hsc-league">Высшая лига - 2020/21</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/0d160b4a9717dae1c83b49850f98baf4-100x100.jpg">
						<span class="hsc-team-name">Соболь</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>1</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/new-admin/games/1295/?print=protocol">статистика</a>
									</div>
				<div class="hsc-date">Вос, 27 Сен. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="4">
							<div class="hsc-league">Высшая лига - 2020/21</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/0d160b4a9717dae1c83b49850f98baf4-100x100.jpg">
						<span class="hsc-team-name">Соболь</span>
													<span class="hsc-team-points"><b>1</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://www.hockey.by/gamecenter/114174/">статистика</a>
									</div>
				<div class="hsc-date">Пн, 28 Сен. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="6">
							<div class="hsc-league">Экстралига  - 2020 / 21 - Дивизион "Б"</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/ed3b1e1c961ec768966d5a98c1ee3e7b-100x100.jpg">
						<span class="hsc-team-name">Пинские Ястребы</span>
													<span class="hsc-team-points"><b>1</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>5</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/gamecenter/114134/">статистика</a>
									</div>
				<div class="hsc-date">Ср, 30 Сен. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="7">
							<div class="hsc-league">Высшая лига - 2020/21</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a3a88ecbb7b2358679379ee5e867cc6c-100x100.jpg">
						<span class="hsc-team-name">Могилев-2</span>
													<span class="hsc-team-points"><b>4</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/gamecenter/114200/">статистика</a>
									</div>
				<div class="hsc-date">Вос, 04 Окт. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="10">
							<div class="hsc-league">Высшая лига - 2020/21</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>8</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a3a88ecbb7b2358679379ee5e867cc6c-100x100.jpg">
						<span class="hsc-team-name">Могилев-2</span>
													<span class="hsc-team-points"><b>2</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/gamecenter/114202/">статистика</a>
									</div>
				<div class="hsc-date">Пн, 05 Окт. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="9">
							<div class="hsc-league">Экстралига  - 2020 / 21 - Дивизион "Б"</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/3a4a629406e9fe530eb1656b07ff77e6-100x100.jpg">
						<span class="hsc-team-name">U18</span>
													<span class="hsc-team-points"><b>1</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>8</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/gamecenter/116958/">статистика</a>
									</div>
				<div class="hsc-date">Ср, 07 Окт. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="5">
							<div class="hsc-league">Экстралига  - 2020 / 21 - Дивизион "Б"</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/2f1e00375631a6c2a7ec3dfe123e586e-100x100.jpg">
						<span class="hsc-team-name">Лида</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>2</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/gamecenter/116960/">статистика</a>
									</div>
				<div class="hsc-date">Пт, 09 Окт. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="6">
							<div class="hsc-league">Высшая лига - 2020/21</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/e99d9e38d97174072ba33ddff2886291-100x100.jpg">
						<span class="hsc-team-name">Витебск-2</span>
													<span class="hsc-team-points"><b>1</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>5</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/gamecenter/114234/">статистика</a>
									</div>
				<div class="hsc-date">Вос, 11 Окт. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="4">
							<div class="hsc-league">Высшая лига - 2020/21</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/e99d9e38d97174072ba33ddff2886291-100x100.jpg">
						<span class="hsc-team-name">Витебск-2</span>
													<span class="hsc-team-points"><b>1</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/gamecenter/114236/">статистика</a>
									</div>
				<div class="hsc-date">Пн, 12 Окт. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="7">
							<div class="hsc-league">Экстралига  - 2020 / 21 - Дивизион "Б"</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>6</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/89af14f825f3e5e8bd51e8bff9bc9f4d-100x100.jpg">
						<span class="hsc-team-name">Витебск</span>
													<span class="hsc-team-points"><b>1</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/gamecenter/116968/">статистика</a>
									</div>
				<div class="hsc-date">Пн, 12 Окт. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="8">
							<div class="hsc-league">Экстралига  - 2020 / 21 - Дивизион "Б"</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/0310c14eafbd9488df8bf507d248fb94-100x100.jpg">
						<span class="hsc-team-name">Химик</span>
													<span class="hsc-team-points"><b>5</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/gamecenter/116972/">статистика</a>
									</div>
				<div class="hsc-date">Ср, 14 Окт. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="6">
							<div class="hsc-league">Высшая лига - 2020/21</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>1</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/2ed5c3b2a6fd13f5492baa5b5b884a4d-100x100.jpg">
						<span class="hsc-team-name">Лида-2</span>
													<span class="hsc-team-points"><b>5</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/gamecenter/114277/">статистика</a>
									</div>
				<div class="hsc-date">Вос, 18 Окт. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="4">
							<div class="hsc-league">Высшая лига - 2020/21</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>1</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/2ed5c3b2a6fd13f5492baa5b5b884a4d-100x100.jpg">
						<span class="hsc-team-name">Лида-2</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/gamecenter/114279/">статистика</a>
									</div>
				<div class="hsc-date">Пн, 19 Окт. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="6">
							<div class="hsc-league">Экстралига  - 2020 / 21 - Дивизион "Б"</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>5</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/50bd80110b1b7aaf51711e4f34a317c3-100x100.jpg">
						<span class="hsc-team-name">Авиатор</span>
													<span class="hsc-team-points"><b>1</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/gamecenter/117669/">статистика</a>
									</div>
				<div class="hsc-date">Вт, 20 Окт. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="5">
							<div class="hsc-league">Экстралига  - 2020 / 21 - Дивизион "Б"</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>2</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/ed3b1e1c961ec768966d5a98c1ee3e7b-100x100.jpg">
						<span class="hsc-team-name">Пинские Ястребы</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/gamecenter/117679/">статистика</a>
									</div>
				<div class="hsc-date">Вт, 20 Окт. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="3">
							<div class="hsc-league">Высшая лига - 2020/21</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/59318256f7a0edddcf85d9e45cbc3ec6-100x100.jpg">
						<span class="hsc-team-name">Бобруйск-2</span>
													<span class="hsc-team-points"><b>2</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>1</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/gamecenter/114307/">статистика</a>
									</div>
				<div class="hsc-date">Вос, 25 Окт. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="8">
							<div class="hsc-league">Высшая лига - 2020/21</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/59318256f7a0edddcf85d9e45cbc3ec6-100x100.jpg">
						<span class="hsc-team-name">Бобруйск-2</span>
													<span class="hsc-team-points"><b>5</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/gamecenter/114309/">статистика</a>
									</div>
				<div class="hsc-date">Пн, 26 Окт. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="10">
							<div class="hsc-league">Высшая лига - 2020/21</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>2</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/e22f00e802b233f661a91ba25cbfe0d4-100x100.jpg">
						<span class="hsc-team-name">U17</span>
													<span class="hsc-team-points"><b>8</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/gamecenter/114350/">статистика</a>
									</div>
				<div class="hsc-date">Пт, 30 Окт. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="5">
							<div class="hsc-league">Экстралига  - 2020 / 21 - Дивизион "Б"</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/50bd80110b1b7aaf51711e4f34a317c3-100x100.jpg">
						<span class="hsc-team-name">Авиатор</span>
													<span class="hsc-team-points"><b>2</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg">
						<span class="hsc-team-name">Брест</span>
													<span class="hsc-team-points"><b>3</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://hockey.by/gamecenter/117717/">статистика</a>
									</div>
				<div class="hsc-date">Пт, 30 Окт. 2020г. </div>
			</div>
					<div class="section-hsc">
			
							<input type="hidden" class="inp-sum-score" value="12">
							<div class="hsc-league">Высшая лига - 2020/21</div>
				<div class="hsc-match">
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/df7f5178f4da61f893b356a8af660652-100x100.jpg">
						<span class="hsc-team-name">Брест-2</span>
													<span class="hsc-team-points"><b>5</b></span>
											</div>
					<div class="hsc-team">
						<img class="hsc-team-logo" src="img/team-logo/e22f00e802b233f661a91ba25cbfe0d4-100x100.jpg">
						<span class="hsc-team-name">U17</span>
													<span class="hsc-team-points"><b>7</b></span>
											</div>
																<a class="match-link" target="_blank" href="https://www.hockey.by/gamecenter/114352/">статистика</a>
									</div>
				<div class="hsc-date">Сб, 31 Окт. 2020г. </div>
			</div>
			</div>
</div>
			 	
<div class="top-news-back" style="background-image: url('/img/title/top/e9f19577076d904a1e37e07160ab2920-1900x380.jpg');">
	<div class="wrap-top-news text-center">
		<h3 class="h3-header-top-news-1">Топ</h3>
		<a class="h3-header-top-news btn-draw" href="post.php?id=551">Набор мальчиков и девочек в СДЮШОР</a>
		
		<div class="stickers stickers-top">
							<a href="list-news.php?type_news=объявление"><span class="bg-warning text-dark sticker-type">объявление</span></a>
				 		</div>
	</div>
</div>
			
		 <div class="container">	
			<div class="row">
								<div class="mt-2">
					<a href = "https://gse.by/portal/brest/index.html?page=323" target="_blank">
						<img class="img-fluid" src ="../img/rek/03bfd4cc71c807c56bc9a0f7ef7fc20f-1290x90.jpg">
					</a>
				</div>
								<div class="col-xl-12 col-lg-12 col-md-12">
				<div class="row sidebar">
	
	<div class="col-xl-8 col-lg-12 col-md-12">
		
			<div class="row">
				<div class="col-lg-12">
					<h3 class="title-chunk"> Последние новости</h3>
					<hr></hr>
				</div>
									<div class="col-xl-6 col-lg-6 col-md-12  col-sm-12">
						<div class="wrap-news">
							<div class="img-news">
								<a href= "post.php?id=663" >
									<img  src="/img/title/img-standart/098845c29919d5e4212561c983ce92c0-700x400.jpg"alt="">
								</a>
								<div class="stickers">
																	<a href="list-news.php?type_news=матч"><span class="bg-danger sticker-type">матч</span></a>
									 								</div>
							</div>
							<div class="title">
								<a href= "post.php?id=663" >Фарм в двух домашних играх проигрывает юниорской сборной</a>
							</div>
							<hr class="mb-1"></hr>
							<div class="date-news">
								<i class="i-clock-gray"></i>
								<span class="sp-date text-muted">31 Окт. 2020 | 16 : 36</span>
							</div>
							<input type="hidden" class="date-last-news" value="2020-10-31 16:36:06">
						</div>
					</div>
					
										<div class="col-xl-6 col-lg-6 col-md-12  col-sm-12">
						<div class="wrap-news">
							<div class="img-news">
								<a href= "post.php?id=662" >
									<img  src="/img/title/img-standart/626f8d8e9a2f4f1f727ccd5294454709-700x400.jpg"alt="">
								</a>
								<div class="stickers">
																	<a href="list-news.php?type_news=интервью"><span class="bg-primary sticker-type">интервью</span></a>
									 								</div>
							</div>
							<div class="title">
								<a href= "post.php?id=662" >Комментарии главных тренеров Андрей Ковалёв - Алексей Страхов</a>
							</div>
							<hr class="mb-1"></hr>
							<div class="date-news">
								<i class="i-clock-gray"></i>
								<span class="sp-date text-muted">30 Окт. 2020 | 22 : 27</span>
							</div>
							<input type="hidden" class="date-last-news" value="2020-10-30 22:27:02">
						</div>
					</div>
					
										<div class="col-xl-6 col-lg-6 col-md-12  col-sm-12">
						<div class="wrap-news">
							<div class="img-news">
								<a href= "post.php?id=661" >
									<img  src="/img/title/img-standart/beb1b811a28baf85a8e00e558e688d8e-700x400.jpg"alt="">
								</a>
								<div class="stickers">
																		<a href="list-news.php?type_news=матч"><span class="bg-danger sticker-type">матч</span></a>	
											
																		<a href="list-news.php?type_news=фото"><span class="bg-success sticker-type">фото</span></a>	
											
																								</div>
							</div>
							<div class="title">
								<a href= "post.php?id=661" >После валидольного матча с &quot;Авиатором&quot; забираем в копилку победные три очка</a>
							</div>
							<hr class="mb-1"></hr>
							<div class="date-news">
								<i class="i-clock-gray"></i>
								<span class="sp-date text-muted">30 Окт. 2020 | 21 : 47</span>
							</div>
							<input type="hidden" class="date-last-news" value="2020-10-30 21:47:56">
						</div>
					</div>
					
										<div class="col-xl-6 col-lg-6 col-md-12  col-sm-12">
						<div class="wrap-news">
							<div class="img-news">
								<a href= "post.php?id=660" >
									<img  src="/img/title/img-standart/1ba0f305d801b105428ab00f6c73cffc-700x400.jpg"alt="">
								</a>
								<div class="stickers">
																	<a href="list-news.php?type_news=объявление"><span class="bg-warning text-dark sticker-type">объявление</span></a>
									 								</div>
							</div>
							<div class="title">
								<a href= "post.php?id=660" >&quot;Авиатор&quot; - &quot;Брест&quot; День матча.</a>
							</div>
							<hr class="mb-1"></hr>
							<div class="date-news">
								<i class="i-clock-gray"></i>
								<span class="sp-date text-muted">30 Окт. 2020 | 09 : 26</span>
							</div>
							<input type="hidden" class="date-last-news" value="2020-10-30 09:26:13">
						</div>
					</div>
					
								</div>
	</div>	
		<div class="col-xl-4 col-lg-12 col-md-12">
			<div class="sidebar" >
	<div class="table-responsive">
		<table class="table table-scating-today table-sm">
			<thead>
				<tr colspan=2>
					<th colspan=6 class="text-center align-middle h3-title-standings" >
						Расписание свободного катания
					</th>
				</tr>
			</thead>
			</tbody>
								<tr class="tr-scting-today">
					
				</tr>
							</tbody>
		</table>
	</div>
		<div class="text-center align-middle mt-1 pb-3">
		<a class="btn btn-secondary btn-link"  data-toggle="modal" data-target="#modal-scating-shedule"  href="#">	
			Расписание на неделю
		</a>
	</div>
		<table class="table table-sm">
		<thead>
			<tr >
				<th colspan=6 class="text-center align-middle h3-title-standings" >
					Турнирная таблица
				</th>
			</tr>
		</thead>
	</table>
	<select class="form-control form-control-sm select-tbl-stn mb-2">
		
				<option>Выберите турнир</option>
				<option value ="7,extra" >Экстралига    -    2019    -    2020    -    Дивизион"Б" 1 этап</option>
				<option value ="8,extra" >Экстралига     -     2019     -     2020     -     Переходной турнир</option>
				<option value ="9,extra" >Экстралига  -  2019  -  2020  -  Кубок Руслана Салея Группа "Б"</option>
				<option value ="10,extra" >Экстралига        -        2020        -        2021        -        Кубок Салея (группа "А")</option>
				<option value ="11,extra" >Экстралига                      -                      2020                      -                      2021                      -                      Дивизион "Б"</option>
						<option value ="4,high" >Высшая лига  -  2019  -  2020  -  Высшая лига</option>
				<option value ="5,high" >Высшая лига          -          2020          -          2021          -          Высшая лига</option>
			</select>
	<div class="table-responsive wrap-table-stan">
		<table class="table table-sm">
			<thead>
				
				<tr class="text-center align-middle"  >
										<th colspan=6 class="text-center align-middle th-title" >
						Экстралига                      -                      2020                      -                      2021                      -                      Дивизион "Б"					</th>
				</tr>
				<tr>
					<th class='text-left' colspan=2>Команда</th>
					<th class='text-center'>И</th>
					<th class='text-center'>В</th>
					<th class='text-center'>П</th>
					<th class='text-center'>О</th>
				</tr>
			</thead>
			<tbody>
								<tr>
					<td class='text-center align-middle' style='width:5%'>
						<img src='img/team-logo/0310c14eafbd9488df8bf507d248fb94-100x100.jpg' class='img-logo-team'>
					</td>
					<td class='text-left align-middle font-weight-bold' style='width:20%' >
						Химик					</td>
					<td class=' align-middle text-center' style='width:10%'>
						13					</td>
					<td class=' align-middle text-center' style='width:10%'>
						9					</td>
					<td class=' align-middle text-center' style='width:10%'>
						4					</td>
					<td class='align-middle text-center font-weight-bold' style='width:10%'>
						28					</td>
				</tr>
								<tr>
					<td class='text-center align-middle' style='width:5%'>
						<img src='img/team-logo/a20a5e92d1a86f6b16764eae7c33cd8b-100x100.jpg' class='img-logo-team'>
					</td>
					<td class='text-left align-middle font-weight-bold' style='width:20%' >
						Брест					</td>
					<td class=' align-middle text-center' style='width:10%'>
						13					</td>
					<td class=' align-middle text-center' style='width:10%'>
						9					</td>
					<td class=' align-middle text-center' style='width:10%'>
						4					</td>
					<td class='align-middle text-center font-weight-bold' style='width:10%'>
						27					</td>
				</tr>
								<tr>
					<td class='text-center align-middle' style='width:5%'>
						<img src='img/team-logo/2f1e00375631a6c2a7ec3dfe123e586e-100x100.jpg' class='img-logo-team'>
					</td>
					<td class='text-left align-middle font-weight-bold' style='width:20%' >
						Лида					</td>
					<td class=' align-middle text-center' style='width:10%'>
						13					</td>
					<td class=' align-middle text-center' style='width:10%'>
						7					</td>
					<td class=' align-middle text-center' style='width:10%'>
						6					</td>
					<td class='align-middle text-center font-weight-bold' style='width:10%'>
						22					</td>
				</tr>
								<tr>
					<td class='text-center align-middle' style='width:5%'>
						<img src='img/team-logo/50bd80110b1b7aaf51711e4f34a317c3-100x100.jpg' class='img-logo-team'>
					</td>
					<td class='text-left align-middle font-weight-bold' style='width:20%' >
						Авиатор					</td>
					<td class=' align-middle text-center' style='width:10%'>
						13					</td>
					<td class=' align-middle text-center' style='width:10%'>
						6					</td>
					<td class=' align-middle text-center' style='width:10%'>
						6					</td>
					<td class='align-middle text-center font-weight-bold' style='width:10%'>
						17					</td>
				</tr>
								<tr>
					<td class='text-center align-middle' style='width:5%'>
						<img src='img/team-logo/3a4a629406e9fe530eb1656b07ff77e6-100x100.jpg' class='img-logo-team'>
					</td>
					<td class='text-left align-middle font-weight-bold' style='width:20%' >
						U18					</td>
					<td class=' align-middle text-center' style='width:10%'>
						15					</td>
					<td class=' align-middle text-center' style='width:10%'>
						6					</td>
					<td class=' align-middle text-center' style='width:10%'>
						9					</td>
					<td class='align-middle text-center font-weight-bold' style='width:10%'>
						17					</td>
				</tr>
								<tr>
					<td class='text-center align-middle' style='width:5%'>
						<img src='img/team-logo/89af14f825f3e5e8bd51e8bff9bc9f4d-100x100.jpg' class='img-logo-team'>
					</td>
					<td class='text-left align-middle font-weight-bold' style='width:20%' >
						Витебск					</td>
					<td class=' align-middle text-center' style='width:10%'>
						15					</td>
					<td class=' align-middle text-center' style='width:10%'>
						5					</td>
					<td class=' align-middle text-center' style='width:10%'>
						10					</td>
					<td class='align-middle text-center font-weight-bold' style='width:10%'>
						16					</td>
				</tr>
								<tr>
					<td class='text-center align-middle' style='width:5%'>
						<img src='img/team-logo/ed3b1e1c961ec768966d5a98c1ee3e7b-100x100.jpg' class='img-logo-team'>
					</td>
					<td class='text-left align-middle font-weight-bold' style='width:20%' >
						Пинские Ястребы					</td>
					<td class=' align-middle text-center' style='width:10%'>
						14					</td>
					<td class=' align-middle text-center' style='width:10%'>
						6					</td>
					<td class=' align-middle text-center' style='width:10%'>
						8					</td>
					<td class='align-middle text-center font-weight-bold' style='width:10%'>
						16					</td>
				</tr>
							</tbody>
		</table>
		<div class="text-center align-middle mt-3">
			<a class="btn btn-secondary btn-link" href="https://hockey.by/statistic/tables/?division=40&command=" target="_blank">Подробная таблица</a>
		</div>
		<div class="text-center align-middle mt-3 mb-3">
			<a class="btn btn-secondary btn-link" href="https://hockey.by/statistic/competition/?division=40&command=147" target="_blank">Статистика игроков</a>
		</div>
	</div>
	
</div>

		</div>
	
</div>
				</div>
				
			</div>
		 </div>
		 <div class="container">	
			<div class="row">
								<div >
					<a href = "https://raschet.by/platelshchikam/poisk-uslugi-v-dereve-uslug-punkty-soversheniya-platezhey/" target="_blank">
						<img class="img-fluid" src ="../img/rek/cddb181dbb79220a7c549225ed836f92-1290x90.jpg">
					</a>
				</div>
								<div class="col-xl-12 col-lg-12 col-md-12">
					
<div class="row " >
	<div class="col-xl-9 col-lg-9 col-md-12 sidebar">
		<div class="row">
			<div class="col-lg-12">
				<h3 class="title-chunk">Видео</h3>
				<hr></hr>
			</div>
		</div>
		<div class="row">
							<div class="col-lg-6 col-sm-12 portfolio-item  61 mb-4">
					
						<div class="wrap-link-video">
							<a class="a-video" data-fancybox href="https://youtu.be/pstlwYIx01s">
								<img class="img-fluid img-photo-gallery" src="https://img.youtube.com/vi/pstlwYIx01s/maxresdefault.jpg">
							</a>
							<a class="wrap-icon-video" data-fancybox  href="https://youtu.be/pstlwYIx01s">
								<i class="fab fa-youtube fa-3x " area-hidden="true"></i>
							</a>
						</div>
						<div class="wrap-title-gallery title-video pl-2 pr-2 mt-2">
							<a data-fancybox href="https://youtu.be/pstlwYIx01s">Авиатор – Брест – 2:3</a>
						</div>
						<hr class="mb-1"></hr>
						<div class="date-news">
							<span class="sp-date text-muted"> Видео # <span class="num-video">54 | <i class="i-clock-gray"></i> 30 Окт. 2020</span></span>
						</div>
					<input type="hidden" class="date-video" value="2020-10-30 22:07:56">
					
				</div>
							<div class="col-lg-6 col-sm-12 portfolio-item  60 mb-4">
					
						<div class="wrap-link-video">
							<a class="a-video" data-fancybox href="https://youtu.be/7vsguyMUJW0">
								<img class="img-fluid img-photo-gallery" src="https://img.youtube.com/vi/7vsguyMUJW0/maxresdefault.jpg">
							</a>
							<a class="wrap-icon-video" data-fancybox  href="https://youtu.be/7vsguyMUJW0">
								<i class="fab fa-youtube fa-3x " area-hidden="true"></i>
							</a>
						</div>
						<div class="wrap-title-gallery title-video pl-2 pr-2 mt-2">
							<a data-fancybox href="https://youtu.be/7vsguyMUJW0">Обзор голов "Брест" - "Пинские ястребы"</a>
						</div>
						<hr class="mb-1"></hr>
						<div class="date-news">
							<span class="sp-date text-muted"> Видео # <span class="num-video">53 | <i class="i-clock-gray"></i> 30 Окт. 2020</span></span>
						</div>
					<input type="hidden" class="date-video" value="2020-10-23 23:42:11">
					
				</div>
						
		</div>
	</div>
	<div class="col-xl-3 col-lg-3 col-md-12 col-left-rek">
		<div class="text-center">
			<a href = "http://www.brest-hockey.by/post.php?id=525" target="_blank" ><img class="img-fluid" src ="../img/rek/98fd2a0aa31cc7cbcc9d1e4438a52899-1290x90.jpg"></a>
		</div>
	</div>
</div>
<div class="sidebar row wrap-button-add-video mt-0">
	<div class="col-lg-12 col-but pl-0 pr-0">
		<button class="btn btn-block btn-load-video btn-primary font-weight-bold text-uppercase">загрузить ещё видео</button>
	</div>
	<div class="col-lg-12 pl-0 pr-0 col-pan" style="display:none">
		<h4 class=" h4-empty bg-secondary text-uppercase">архив видео пуст</h4>
	</div>
</div>
	
				</div>
			</div>
			<div class="row">
								<div >
					<a href = "https://sovets.net/17429-profilaktika-narkomanii.html" target="_blank">
						<img class="img-fluid" src ="../img/rek/9ee1cc49259554a0d6f29e4a1e96e6a2-1290x90.jpg">
					</a>
				</div>
								<div class="col-xl-12 col-lg-12 col-md-12">
					<div class="row" >
	<div class="col-xl-9 col-lg-9 col-md-12 sidebar">
		<div class="row">
			<div class="col-lg-12">
				<h3 class="title-chunk">Фото</h3>
				<hr></hr>
			</div>
		</div>
		<div class="row">
						<div class="col-xl-6 col-lg-6 col-md-12  col-sm-12">
				<div class="wrap-news">
					<div class="img-news">
						<a href= "post.php?id=661" >
							<img  src="/img/title/img-standart/beb1b811a28baf85a8e00e558e688d8e-700x400.jpg"alt="">
						</a>
					</div>
					<div class="title">
						<a href= "post.php?id=661" >После валидольного матча с &quot;Авиатором&quot; забираем в копилку победные три очка</a>
					</div>
					<hr class="mb-1"></hr>
					<div class="date-news">
						<span class="sp-date text-muted"> Фотогалерея # <span class="num-photo">29 | <i class="i-clock-gray"></i> 30 Окт. 2020</span></span>
					</div>
					<input type="hidden" class="date-photo" value="2020-10-30 21:47:56">
				</div>
			</div>
						<div class="col-xl-6 col-lg-6 col-md-12  col-sm-12">
				<div class="wrap-news">
					<div class="img-news">
						<a href= "post.php?id=655" >
							<img  src="/img/title/img-standart/132cb881d08f2db9d42162c00a5775d5-700x400.jpg"alt="">
						</a>
					</div>
					<div class="title">
						<a href= "post.php?id=655" >В третьем периоде &quot;ястре5ы&quot; переломили ход игры, и решили её исход в свою пользу</a>
					</div>
					<hr class="mb-1"></hr>
					<div class="date-news">
						<span class="sp-date text-muted"> Фотогалерея # <span class="num-photo">28 | <i class="i-clock-gray"></i> 30 Окт. 2020</span></span>
					</div>
					<input type="hidden" class="date-photo" value="2020-10-23 22:44:26">
				</div>
			</div>
					</div>
	</div>
	<div class="col-xl-3 col-lg-3 col-md-12  col-left-rek">
		<div class="text-center">
			<a href = "http://качество-услуг.бел/RatingPortal" target="_blank"><img class="img-fluid" src ="../img/rek/fd41f233789184a2f97e71933005598d-1290x90.jpg"></a>
		</div>
	</div>
</div>
<div class="sidebar row wrap-button-add-photo mt-0">
	<div class="col-lg-12 col-but pl-0 pr-0">
		<button class="btn btn-block btn-load-photo btn-primary font-weight-bold text-uppercase">загрузить ещё фото</button>
	</div>
	<div class="col-lg-12 pl-0 pr-0 col-pan" style="display:none">
		<h4 class=" h4-empty bg-secondary text-uppercase">фотоархив пуст</h4>
	</div>
</div>
				</div>
			</div>
		 </div>
		 <div class="container">	
			<div class="row">
								<div >
					<a href = "http://mogilev.gov.by/kultura-zdorovya/4237-6619-lektsiya-po-profilaktike-kureniya-zhizn-bez-tabaka.html?lngdjecbimohdjmo" target="_blank">
						<img class="img-fluid" src ="../img/rek/08f4cd145359f498331918def74a7c2e-1290x90.jpg">
					</a>
				</div>
								<div class="col-xl-12 col-lg-12 col-md-12">
					
<div class="row sidebar">
<div class="col-lg-12">
	<h3 class="title-chunk"> Архив новостей</h3>
	<hr></hr>
</div>
	<div class="col-xl-3 col-lg-4 col-md-6  col-sm-12">
		<div class="wrap-news">
			<div class="img-news">
				<a href= "post.php?id=659" >
					<img  src="/img/title/img-standart/1bb4d762fbe270d99213ab15a0cc3baa-700x400.jpg"alt="">
				</a>
				<div class="stickers">
									<a href="list-news.php?type_news=матч"><span class="bg-danger sticker-type">матч</span></a>
					 				</div>
			</div>
			<div class="title">
				<a href= "post.php?id=659" >&quot;Брест-2&quot; проиграл две игры на выезде фарму из Бобруйска</a>
			</div>
			<hr class="mb-1"></hr>
			<div class="date-news">
				<i class="i-clock-gray"></i>
				<span class="sp-date text-muted">26 Окт. 2020 | 20 : 26</span>
			</div>
		</div>
		<input type ="hidden" class="last-date-news" value="2020-10-26 20:26:27">
	</div>
		<div class="col-xl-3 col-lg-4 col-md-6  col-sm-12">
		<div class="wrap-news">
			<div class="img-news">
				<a href= "post.php?id=658" >
					<img  src="/img/title/img-standart/f9c25e82705331db7e3c3a27db806d80-700x400.jpg"alt="">
				</a>
				<div class="stickers">
									<a href="list-news.php?type_news=интервью"><span class="bg-primary sticker-type">интервью</span></a>
					 				</div>
			</div>
			<div class="title">
				<a href= "post.php?id=658" >Капитан команды Михаил Хоромандо прокомментировал встречу с &quot;Пинскими ястребами&quot;</a>
			</div>
			<hr class="mb-1"></hr>
			<div class="date-news">
				<i class="i-clock-gray"></i>
				<span class="sp-date text-muted">24 Окт. 2020 | 10 : 40</span>
			</div>
		</div>
		<input type ="hidden" class="last-date-news" value="2020-10-24 10:40:43">
	</div>
		<div class="col-xl-3 col-lg-4 col-md-6  col-sm-12">
		<div class="wrap-news">
			<div class="img-news">
				<a href= "post.php?id=657" >
					<img  src="/img/title/img-standart/466c1b6b8a5072914df88c84ef134467-700x400.jpg"alt="">
				</a>
				<div class="stickers">
									<a href="list-news.php?type_news=видео"><span class="bg-secondary sticker-type">видео</span></a>
					 				</div>
			</div>
			<div class="title">
				<a href= "post.php?id=657" >Обзор голов &quot;Брест&quot; - &quot;Пинские ястребы&quot;</a>
			</div>
			<hr class="mb-1"></hr>
			<div class="date-news">
				<i class="i-clock-gray"></i>
				<span class="sp-date text-muted">23 Окт. 2020 | 23 : 41</span>
			</div>
		</div>
		<input type ="hidden" class="last-date-news" value="2020-10-23 23:41:50">
	</div>
		<div class="col-xl-3 col-lg-4 col-md-6  col-sm-12">
		<div class="wrap-news">
			<div class="img-news">
				<a href= "post.php?id=656" >
					<img  src="/img/title/img-standart/7659481bc3f4aa1095c3ec17035e04c7-700x400.jpg"alt="">
				</a>
				<div class="stickers">
									<a href="list-news.php?type_news=интервью"><span class="bg-primary sticker-type">интервью</span></a>
					 				</div>
			</div>
			<div class="title">
				<a href= "post.php?id=656" >Комментарии главных тренеров: Саяпин Дмитрий - Ковалёв Андрей</a>
			</div>
			<hr class="mb-1"></hr>
			<div class="date-news">
				<i class="i-clock-gray"></i>
				<span class="sp-date text-muted">23 Окт. 2020 | 22 : 45</span>
			</div>
		</div>
		<input type ="hidden" class="last-date-news" value="2020-10-23 22:45:31">
	</div>
		<div class="col-xl-3 col-lg-4 col-md-6  col-sm-12">
		<div class="wrap-news">
			<div class="img-news">
				<a href= "post.php?id=655" >
					<img  src="/img/title/img-standart/132cb881d08f2db9d42162c00a5775d5-700x400.jpg"alt="">
				</a>
				<div class="stickers">
										<a href="list-news.php?type_news=матч"><span class="bg-danger sticker-type">матч</span></a>	
							
										<a href="list-news.php?type_news=фото"><span class="bg-success sticker-type">фото</span></a>	
							
												</div>
			</div>
			<div class="title">
				<a href= "post.php?id=655" >В третьем периоде &quot;ястре5ы&quot; переломили ход игры, и решили её исход в свою пользу</a>
			</div>
			<hr class="mb-1"></hr>
			<div class="date-news">
				<i class="i-clock-gray"></i>
				<span class="sp-date text-muted">23 Окт. 2020 | 22 : 44</span>
			</div>
		</div>
		<input type ="hidden" class="last-date-news" value="2020-10-23 22:44:26">
	</div>
		<div class="col-xl-3 col-lg-4 col-md-6  col-sm-12">
		<div class="wrap-news">
			<div class="img-news">
				<a href= "post.php?id=654" >
					<img  src="/img/title/img-standart/bd9a35acb06dbf9505b0849ecd70b8a3-700x400.jpg"alt="">
				</a>
				<div class="stickers">
									<a href="list-news.php?type_news=объявление"><span class="bg-warning text-dark sticker-type">объявление</span></a>
					 				</div>
			</div>
			<div class="title">
				<a href= "post.php?id=654" >&quot;Брест&quot; - &quot;Пинские ястребы&quot;. Анонс мачта.</a>
			</div>
			<hr class="mb-1"></hr>
			<div class="date-news">
				<i class="i-clock-gray"></i>
				<span class="sp-date text-muted">23 Окт. 2020 | 09 : 32</span>
			</div>
		</div>
		<input type ="hidden" class="last-date-news" value="2020-10-23 09:32:11">
	</div>
		<div class="col-xl-3 col-lg-4 col-md-6  col-sm-12">
		<div class="wrap-news">
			<div class="img-news">
				<a href= "post.php?id=653" >
					<img  src="/img/title/img-standart/42071024b2dbc3ee9674b3ac56f1cfe7-700x400.jpg"alt="">
				</a>
				<div class="stickers">
									<a href="list-news.php?type_news=объявление"><span class="bg-warning text-dark sticker-type">объявление</span></a>
					 				</div>
			</div>
			<div class="title">
				<a href= "post.php?id=653" >&quot;Химику&quot; будут засчитаны технические поражения</a>
			</div>
			<hr class="mb-1"></hr>
			<div class="date-news">
				<i class="i-clock-gray"></i>
				<span class="sp-date text-muted">22 Окт. 2020 | 14 : 11</span>
			</div>
		</div>
		<input type ="hidden" class="last-date-news" value="2020-10-22 14:11:33">
	</div>
		<div class="col-xl-3 col-lg-4 col-md-6  col-sm-12">
		<div class="wrap-news">
			<div class="img-news">
				<a href= "post.php?id=652" >
					<img  src="/img/title/img-standart/fc3920a7e212f4c9a01c6215d3fc73ad-700x400.jpg"alt="">
				</a>
				<div class="stickers">
									<a href="list-news.php?type_news=событие"><span class="bg-info sticker-type">событие</span></a>
					 				</div>
			</div>
			<div class="title">
				<a href= "post.php?id=652" >Голкипер «Бреста-2» Дмитрий Свистунов дисквалифицирован на пять матчей</a>
			</div>
			<hr class="mb-1"></hr>
			<div class="date-news">
				<i class="i-clock-gray"></i>
				<span class="sp-date text-muted">21 Окт. 2020 | 14 : 20</span>
			</div>
		</div>
		<input type ="hidden" class="last-date-news" value="2020-10-21 14:20:34">
	</div>
		<div class="col-xl-3 col-lg-4 col-md-6  col-sm-12">
		<div class="wrap-news">
			<div class="img-news">
				<a href= "post.php?id=651" >
					<img  src="/img/title/img-standart/9131c1a5569b3cff4108208159b71495-700x400.jpg"alt="">
				</a>
				<div class="stickers">
									<a href="list-news.php?type_news=интервью"><span class="bg-primary sticker-type">интервью</span></a>
					 				</div>
			</div>
			<div class="title">
				<a href= "post.php?id=651" >Комментарии главных тренеров: Страхов Алексей - Ковалёв Андрей</a>
			</div>
			<hr class="mb-1"></hr>
			<div class="date-news">
				<i class="i-clock-gray"></i>
				<span class="sp-date text-muted">20 Окт. 2020 | 22 : 08</span>
			</div>
		</div>
		<input type ="hidden" class="last-date-news" value="2020-10-20 22:08:59">
	</div>
		<div class="col-xl-3 col-lg-4 col-md-6  col-sm-12">
		<div class="wrap-news">
			<div class="img-news">
				<a href= "post.php?id=650" >
					<img  src="/img/title/img-standart/fdcc43c26a7db0f3b4e85a5aa795f8aa-700x400.jpg"alt="">
				</a>
				<div class="stickers">
										<a href="list-news.php?type_news=матч"><span class="bg-danger sticker-type">матч</span></a>	
							
										<a href="list-news.php?type_news=видео"><span class="bg-secondary sticker-type">видео</span></a>	
							
												</div>
			</div>
			<div class="title">
				<a href= "post.php?id=650" >Уверенно одерживаем победу над &quot;Авиатором&quot;</a>
			</div>
			<hr class="mb-1"></hr>
			<div class="date-news">
				<i class="i-clock-gray"></i>
				<span class="sp-date text-muted">20 Окт. 2020 | 22 : 07</span>
			</div>
		</div>
		<input type ="hidden" class="last-date-news" value="2020-10-20 22:07:58">
	</div>
		<div class="col-xl-3 col-lg-4 col-md-6  col-sm-12">
		<div class="wrap-news">
			<div class="img-news">
				<a href= "post.php?id=649" >
					<img  src="/img/title/img-standart/9eaa39c6d26a936b5a6f6ec9bff36b69-700x400.jpg"alt="">
				</a>
				<div class="stickers">
									<a href="list-news.php?type_news=объявление"><span class="bg-warning text-dark sticker-type">объявление</span></a>
					 				</div>
			</div>
			<div class="title">
				<a href= "post.php?id=649" >&quot;Брест&quot; - &quot;Авиатор&quot;. Анонс матча.</a>
			</div>
			<hr class="mb-1"></hr>
			<div class="date-news">
				<i class="i-clock-gray"></i>
				<span class="sp-date text-muted">20 Окт. 2020 | 10 : 22</span>
			</div>
		</div>
		<input type ="hidden" class="last-date-news" value="2020-10-20 10:22:56">
	</div>
		<div class="col-xl-3 col-lg-4 col-md-6  col-sm-12">
		<div class="wrap-news">
			<div class="img-news">
				<a href= "post.php?id=648" >
					<img  src="/img/title/img-standart/619e3b3e813d9bb0a8ef518f98b14b76-700x400.jpg"alt="">
				</a>
				<div class="stickers">
									<a href="list-news.php?type_news=событие"><span class="bg-info sticker-type">событие</span></a>
					 				</div>
			</div>
			<div class="title">
				<a href= "post.php?id=648" >Павел Корсаков покинул «Брест»</a>
			</div>
			<hr class="mb-1"></hr>
			<div class="date-news">
				<i class="i-clock-gray"></i>
				<span class="sp-date text-muted">19 Окт. 2020 | 21 : 59</span>
			</div>
		</div>
		<input type ="hidden" class="last-date-news" value="2020-10-19 21:59:28">
	</div>
	</div>

<div class="sidebar wrap-button-add-news row">
	<div class="col-lg-12 col-but pl-0 pr-0">
		<button class="btn btn-block btn-load-news btn-primary font-weight-bold text-uppercase"> Загрузить ещё новости</button>
	</div>
	<div class="col-lg-12 pl-0 pr-0 col-pan" style="display:none">
		<h4 class=" h4-empty bg-secondary text-uppercase">архив новостей пуст</h4>
	</div>
</div>
				</div>
								<div class="mb-3">
					<a href = "https://17bobruisk.schools.by/pages/profilaktika-i-preduprezhdenie-suitsidalnogo-povedenija" target="_blank">
						<img class="img-fluid" src ="../img/rek/1ac78200e76022377bba743e2a74d691-1290x90.jpg">
					</a>
				</div>
							</div>
		</div>
   </body>   
	<footer class="py-5 footer footer-custom">
	<div class="container container-black">
			<h2 class="footer-h2">Соцсети</h2>
				<hr class="hr-footer"></hr>
			<div class='row'>
				<div class='col-lg-4'>
					<a class="btn btn-block btn-vk btn-social btn-adn" href="https://vk.com/brest_hc" target="_blank">
						<i class="fab fa-vk"></i><b class='text-white'>В контакте</b>
					</a>
				</div>
				<div class='col-lg-4'>
					<a class="btn btn-block btn-instagram btn-social btn-pinterest" href="https://www.instagram.com/brest_hc/" target="_blank">
						<i class="fab fa-instagram"></i> <b class='text-white'>Инстаграм</b>
					</a>
				</div>
				<div class='col-lg-4'>
					<a class="btn btn-block  btn-social btn-twitter" href="https://twitter.com/brest_hc" target="_blank">
						<i class="fab fa-twitter"></i> <b class='text-white'>Твиттер</b>
					</a>
				</div>
			</div>
		    
			<h2 class="mt-4 footer-h2">Наши спонсоры</h2>
				<hr class="hr-footer"></hr>
			<div class="row">
								<div class="col-md-3 col-sm-6 mb-4">
				  <a href="http://www.santa-bremor.com/" target="_blank" ><img class="img-fluid"  src="img/sponsors/santa-1.jpg" alt=""></a>
				</div>
								<div class="col-md-3 col-sm-6 mb-4">
				  <a href="http://www.savushkin.by/" target="_blank" ><img class="img-fluid"  src="img/sponsors/savushkin.jpg" alt=""></a>
				</div>
								<div class="col-md-3 col-sm-6 mb-4">
				  <a href="https://prodtovary.com/" target="_blank" ><img class="img-fluid"  src="img/sponsors/prod.jpg" alt=""></a>
				</div>
							</div>
				<p class="mt-2 mb-2 text-center p-footer">Copyright &copy; 2020 ГУ ХК "Брест" Все права защищены.</p>
	</div>
</footer>	<!--[if lte IE 9]>
	<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<![endif]-->
	<!--[if gte IE 9]><!-->
	<script type="text/javascript" src="js/jquery-2.1.1.js"></script>
	<!--<![endif]-->
	<script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
	<script  type="text/javascript"  src="js/index-2.js"></script>
	<script type="text/javascript" src="js/moment.min.js"></script>
	<script type="text/javascript" src="js/slick.js"></script>
	<script  type="text/javascript" src="js/jquery.fancybox.js"></script>
	<script  type="text/javascript"  src="js/menu.js"></script>
	<script  type="text/javascript"  src="js/plugin-preloader.js"></script>
	<script  type="text/javascript"  src="js/modal.js"></script>
	
	
</html>`;
