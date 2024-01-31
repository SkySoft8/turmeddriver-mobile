<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
const network =
		"https://stackoverflow.com/questions/57296756/how-to-check-internet-connection-in-react-native-application-for-both-ios-and-an";
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user()->id;
});

Route::get('/posts',); // посты в блог
Route::get('/posts/{post}',); // 1 пост в блог
Route::get('/baners', ); // картинки на главной для слайдера


Route::get('/users/filters', ); // фильтр на главной наверное
Route::get('/users', ); // все пользователи

Route::post('/medicals', );  // карты медиков
Route::get('/medicals/filters', ); // фильтр карт медиков
Route::get('/medicals/{medicalCard}', ); // карта медиков
Route::get('/time', ); // время в карте медиков
Route::get('/list', ); // категории в карте медиков (зеленые)
"data": [
	{
		"deleted_at": null,
		"id": 1,
		"title": "Дерматология",
		"user_id": 2
	},
	{
		"deleted_at": null,
		"id": 3,
		"title": "Эндокринология",
		"user_id": 2
	},
	{
		"deleted_at": null,
		"id": 4,
		"title": "УЗИ",
		"user_id": 2
	},


Route::get('/item', ); // список подкатегорий (но они выводятся как продукты там цена стоит у них в карте)
{
	"data": [
			{
				"deleted_at": null,
				"id": 1,
				"medical_todo_list_id": 1,
				"price": "300",
				"title": "Консультация дермалогога"
			},
			{
				"deleted_at": null,
				"id": 2,
				"medical_todo_list_id": 1,
				"price": "1300",
				"title": "Трихоскопия"
			},
			{
				"deleted_at": null,
				"id": 3,
				"medical_todo_list_id": 1,
				"price": "1400",
				"title": "Цифровая дерматоскопия"
			},


Route::get('/product', ); // это должны быть продукты, но они тип чет не используются
Route::post('medicals/{medicalCard}/comments',); // Записывает коммент для карты
Route::post('/show/{medicalCard}/comments', ); // показывает коммент для карты
Route::delete('/medicals/comment/{id}', ); // удаляет коммент в карте
Route::get('/medicalAction', ); // Преференции для клиентов платформы
{
	"data": [
	{
		"id": 1,
		"title": "акция №1",
		"user_id": 2
	},
	{
		"id": 2,
		"title": "акция №2",
		"user_id": 2
	},
	{
		"id": 3,
		"title": "акция №3",
		"user_id": 2
	},
	{
		"id": 4,
		"title": "Преференция 1",
		"user_id": 14
	},
	{
		"id": 5,
		"title": "Преференция 2",
		"user_id": 14
	},
	{
		"id": 6,
		"title": "Преференция 1",
		"user_id": 32
	},
	{
		"id": 7,
		"title": "Преференция 2",
		"user_id": 32
	}]
}
Route::get('/medicalImage',); //  выводит фотки в карту тип




Route::post('/spa',); // все спа
Route::get('/spa/filters', ); // фильтр
Route::get('/spa/{spaCard}', ); // карта
Route::get('/spatimes', ); // время в карте
Route::get('/spalists',); // категории продуктов
Route::get('/spaitems',); // подкатегории (стоят с ценой сча)
Route::get('/spaproducts',); // должны тип быть продукты, они не выводятся
Route::post('/spa/{spaCard}/comments',); // записать коммент
Route::post('/spa/show/{spaCard}/comments', ); // вывод коммента
Route::delete('/spa/comment/{id}', ); // удаление коммента
Route::get('/spaAction', ); // преференции
Route::get('/spaImage', ); // картинки

Route::post('/cafes', ); // все кафе
Route::get('/cafes/filters', ); // фильтр для кафе
Route::get('/cafe/{cafeCard}', ); // карта 1 кафе
Route::get('/cafetimes', ); // время
Route::get('/cafelists', ); // категории продуктов
Route::get('/cafeitems', ); // подкатегория
Route::get('/cafeproducts', ); // продукт который  не выводится либо они оказались не нужны и выше тоже самое
Route::post('/cafe/{cafeCard}/comments',); // записать коммент
Route::post('/cafe/show/{cafeCard}/comments'); // показать все комменты
Route::delete('/cafe/comment/{id}', ); //удалить коммент
Route::get('/cafeAction', );//преференции
Route::get('/cafeImage',); //картинки

Route::post('/hostels', ); //все отели
Route::get('/hostels/filters', ); //фильтр для отелей
Route::get('/hostel/{hostelCard}',); // 1 отель
Route::get('/hostelAction', ); //преферениции
Route::get('/hostelServic',); // услуги и удобства
Route::get('/hostelCategories',); // категории отелей
Route::get('/hostelPost',); // посты (номера отелей)
Route::post('/hostel/{hostelCard}/comments', ); //записать коммент
Route::post('/hostelShow/{hostelCard}/comments',); // все комменты
Route::delete('/hostel/comment/{id}', ); // Удалить коммент


Route::post('/sanatoriums', ); // все санатории
Route::get('/sanatoriums/filters', ); // фильтры санаториев
Route::get('/sanatorium/{sanatoriumCard}',); // карта санатория
Route::get('/sanatoriumAction', ); // преференции
Route::get('/sanatoriumServic', ); //услуги удобства
Route::get('/sanatoriumCategories', ); //категории
Route::get('/sanatoriumPost', ); //номера
Route::post('/sanatorium/{sanatoriumCard}/comments', ); //запись коммента
Route::post('/sanatoriumShow/{sanatoriumCard}/comments', ); //+ вывод комментов
Route::delete('/sanatorium/comment/{id}',); //удаление коммента
Route::get('/sanatoriumLists', ); // список категорий услуг (зеленые)
Route::get('/sanatoriumItems', ); // сами услуги  (подкатегория стоят сча с ценой)
Route::get('/sanatoriumProducts',); //тип продукты которые нахуй чет никому не сдались сча, а сразу нужны были

Route::post('/turs', ); // все туристы
Route::get('/turs/filters', );// фильтр туристов
Route::get('/tur/{turCard}', );//карта туриста
Route::get('/turAction', );//преференции туристов
Route::get('/turServic',);//услуги и удобства туристов
Route::get('/turCategories', );//категории туристов
Route::get('/turPost',); //номера туристов
Route::post('/tur/{turCard}/comments', ); //записать коммент
Route::post('/turShow/{turCard}/comments', );//показать коммент
Route::delete('/tur/comment/{id}', );//удалить коммент
Route::get('/turtime', );//время в карте туристов

Route::post('/sports',); //все спортики
Route::get('/sports/filters', );//фильтры спорт
Route::get('/sport/{sportCard}', );//карта 1
Route::get('/sportAction', );//префернции
Route::get('/sportServic',);// услуги
Route::get('/sportCategories',);//категории
Route::get('/sportPost',);//номера
Route::post('/sport/{sportCard}/comments', );//записать коммент
Route::post('/sportShow/{sportCard}/comments', );//показать коммент
Route::delete('/sport/comment/{id}', );//удалить коммент
Route::get('/sportLists', );//инфаструктура категории (зеленые)
Route::get('/sportItems', );//подкатегории с ценой сча стоят ()
Route::get('/sportProducts', );//тип сами продукты но там чет их никто не добавляет

Route::post('/preOrder', ); // записать заказ в корзину

