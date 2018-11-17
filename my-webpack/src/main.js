import $ from 'jquery'
// 引入css
import './css/index.css'
// 引入less文件
import './css/test.less'

//引入sass
import './css/demo.scss'

$(function () {  
    $('ul>li:odd').css('backgroundColor', 'red')
    $('ul>li:even').css('backgroundColor', 'skyblue')
  })