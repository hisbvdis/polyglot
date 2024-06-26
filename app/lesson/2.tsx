import WebView from "react-native-webview";
import { useEffect, useState } from "react";
import { Link, Stack, useSegments } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
// -----------------------------------------------------------------------------
import Container from "@/components/Container";
// -----------------------------------------------------------------------------
import { Lesson, Lessons } from "@/assets/types";
import Btn from "@/components/Btn";


export default function Lesson1() {
  const segments = useSegments();
  const [ lesson, setLesson ] = useState<Lesson>();

  useEffect(() => {(async () => {
    const allLessonsJson = await AsyncStorage.getItem("lessons");
    if (!allLessonsJson) return;
    const allLessonsArray = JSON.parse(allLessonsJson) as Lessons;
    const currentLessonObject = allLessonsArray.find((lesson) => lesson.number === segments.at(-1));
    setLesson(currentLessonObject);
  })()}, [])

  return (
    <Container>
      <Stack.Screen options={{title: `${lesson?.number}. ${lesson?.title}`}}/>
      <WebView source={{html: `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    table {
      border-collapse: collapse;
      /* table-layout: fixed; */
      inline-size: 850px;
    }
    td {
      padding: 5px;
      border: 1px solid #ccc;
    }
    .notesTable {
      background-color: #fafafa;
    }
    .tensesTable tr:nth-child(-n+4) {
      background-color: #fff7e5;
    }

    .tensesTable tr:nth-child(n+5) {
      background-color: #e5f5e6;
    }

    .tensesTable tr:nth-child(n+8) {
      background-color: #fce9e5;
    }

    p {
      margin-block: 0;
    }

    h2 {
      margin-block: 1em 0;
    }

    .heading {
      background-color: #f3f3f3;
      border: 2px solid #000;
      text-align: center;
    }

    .heading--aside {
      writing-mode: vertical-rl;
      text-orientation: upright;
    }
    .subHeading {
      font-weight: bold;
      color: #900;
    }

    .wideBorderBottom {
      border-block-end: 2px solid black;
    }

    .wideBorderRight {
      border-inline-end: 2px solid black;
    }

    .verb {
      color: #ea4335;
      font-weight: bold;
    }

    .comment {
      color: #969896;
    }
  </style>
  <title>Document</title>
</head>

<body>

  <p><b>Continuous</b> — процесс в момент или в ограниченный период времени</p>

  <h2>1. Формирование (актив)</h2>
  <table class="tensesTable">
    <tbody>
      <tr>
        <td class="heading"></td>
        <td class="heading" colspan="4">Вопрос</td>
        <td class="heading" colspan="3">Утверждение</td>
        <td class="heading" colspan="3">Отрицание</td>
      </tr>
      <tr>
        <td rowspan="3" class="heading heading--aside">Будущее</td>
        <td rowspan="3" class="wideBorderBottom">Will</td>
        <td>I</td>
        <td rowspan="3" class="wideBorderBottom">be</td>
        <td rowspan="3" class="wideBorderBottom wideBorderRight">
          <span class="verb">paint</span><b>ing</b>
          (<span class="verb">V</span><b>ing</b>)
        </td>
        <td>I</td>
        <td rowspan="3" class="wideBorderBottom">will be</td>
        <td rowspan="3" class="wideBorderBottom wideBorderRight">
          <span class="verb">paint</span><b>ing</b>
          (<span class="verb">V</span><b>ing</b>)
        </td>
        <td>I</td>
        <td rowspan="3" class="wideBorderBottom">will not be</td>
        <td rowspan="3" class="wideBorderBottom wideBorderRight">
          <span class="verb">paint</span><b>ing</b>
          (<span class="verb">V</span><b>ing</b>)
        </td>
      </tr>
      <tr>
        <td>He<br />She<br />It</td>
        <td>He<br />She<br />It</td>
        <td>He<br />She<br />It</td>
      </tr>
      <tr>
        <td class="wideBorderBottom">We<br />You<br />They</td>
        <td class="wideBorderBottom">We<br />You<br />They</td>
        <td class="wideBorderBottom">We<br />You<br />They</td>
      </tr>
      <tr>
        <td rowspan="3" class="heading heading--aside">Настоящее</td>
        <td>Am</td>
        <td>I</td>
        <td rowspan="3" colspan="2" class="wideBorderBottom wideBorderRight">
          <span class="verb">paint</span><b>ing</b>
          (<span class="verb">V</span><b>ing</b>)
        </td>
        <td>I</td>
        <td>am</td>
        <td rowspan="3" class="wideBorderRight wideBorderBottom">
          <span class="verb">paint</span><b>ing</b>
          (<span class="verb">V</span><b>ing</b>)
        </td>
        <td>I</td>
        <td>am not</td>
        <td rowspan="3" class="wideBorderBottom wideBorderRight">
          <span class="verb">paint</span><b>ing</b>
          (<span class="verb">V</span><b>ing</b>)
        </td>
      </tr>
      <tr>
        <td>Is</td>
        <td>He<br />She<br />It</td>
        <td>He<br />She<br />It</td>
        <td>is</td>
        <td>He<br />She<br />It</td>
        <td>isn't</td>
      </tr>
      <tr>
        <td class="wideBorderBottom">Are</td>
        <td class="wideBorderBottom">We<br />You<br />They</td>
        <td class="wideBorderBottom">We<br />You<br />They</td>
        <td class="wideBorderBottom">are</td>
        <td class="wideBorderBottom">We<br />You<br />They</td>
        <td class="wideBorderBottom">aren't</td>
      </tr>
      <tr>
        <td rowspan="3" class="heading heading--aside">Прошедшее</td>
        <td rowspan="2">Was</td>
        <td>I</td>
        <td rowspan="3" colspan="2" class="wideBorderBottom wideBorderRight">
          <span class="verb">paint</span><b>ing</b>
          (<span class="verb">V</span><b>ing</b>)
        </td>
        <td>I</td>
        <td rowspan="2">was</td>
        <td rowspan="3" class="wideBorderBottom wideBorderRight">
          <span class="verb">paint</span><b>ing</b>
          (<span class="verb">V</span><b>ing</b>)
        </td>
        <td>I</td>
        <td rowspan="2">wasn't</td>
        <td rowspan="3" class="wideBorderBottom wideBorderRight">
          <span class="verb">paint</span><b>ing</b>
          (<span class="verb">V</span><b>ing</b>)
        </td>
      </tr>
      <tr>
        <td>He<br />She<br />It</td>
        <td>He<br />She<br />It</td>
        <td>He<br />She<br />It</td>
      </tr>
      <tr>
        <td rowspan="2" class="wideBorderBottom">Were</td>
        <td class="wideBorderBottom">We<br />You<br />They</td>
        <td class="wideBorderBottom">We<br />You<br />They</td>
        <td class="wideBorderBottom">were</td>
        <td class="wideBorderBottom">We<br />You<br />They</td>
        <td rowspan="2" class="wideBorderBottom">weren't</td>
      </tr>
    </tbody>
  </table>


  <h2>2. Формирование (пассив)</h2>
  <table class="tensesTable">
    <tbody>
      <tr>
        <td class="heading"></td>
        <td class="heading" colspan="4">Вопрос</td>
        <td class="heading" colspan="4">Утверждение</td>
        <td class="heading" colspan="4">Отрицание</td>
      </tr>
      <tr>
        <td rowspan="3" class="heading heading--aside">Будущее</td>
        <td rowspan="3" colspan="4" class="wideBorderBottom wideBorderRight">Не употребляется</td>
        <td rowspan="3" colspan="4" class="wideBorderBottom wideBorderRight">Не употребляется</td>
        <td rowspan="3" colspan="4" class="wideBorderBottom wideBorderRight">Не употребляется</td>
      </tr>
      <tr></tr>
      <tr></tr>
      <tr>
        <td rowspan="3" class="heading heading--aside">Настоящее</td>
        <td>Am</td>
        <td>I</td>
        <td rowspan="3" class="wideBorderBottom">being</td>
        <td rowspan="3" class="wideBorderBottom wideBorderRight">
          <span class="verb">paint</span><b>ing</b>
          (<span class="verb">V</span><b>ing</b>)
        </td>
        <td>I</td>
        <td>am</td>
        <td rowspan="3" class="wideBorderBottom">being</td>
        <td rowspan="3" class="wideBorderRight wideBorderBottom">
          <span class="verb">paint</span><b>ing</b>
          (<span class="verb">V</span><b>ing</b>)
        </td>
        <td>I</td>
        <td>am not</td>
        <td rowspan="3" class="wideBorderBottom">being</td>
        <td rowspan="3" class="wideBorderBottom wideBorderRight">
          <span class="verb">paint</span><b>ing</b>
          (<span class="verb">V</span><b>ing</b>)
        </td>
      </tr>
      <tr>
        <td>Is</td>
        <td>He<br />She<br />It</td>
        <td>He<br />She<br />It</td>
        <td>is</td>
        <td>He<br />She<br />It</td>
        <td>isn't</td>
      </tr>
      <tr>
        <td class="wideBorderBottom">Are</td>
        <td class="wideBorderBottom">We<br />You<br />They</td>
        <td class="wideBorderBottom">We<br />You<br />They</td>
        <td class="wideBorderBottom">are</td>
        <td class="wideBorderBottom">We<br />You<br />They</td>
        <td class="wideBorderBottom">aren't</td>
      </tr>
      <tr>
        <td rowspan="3" class="heading heading--aside">Прошедшее</td>
        <td rowspan="2">Was</td>
        <td>I</td>
        <td rowspan="3" class="wideBorderBottom">being</td>
        <td rowspan="3" class="wideBorderBottom wideBorderRight">
          <span class="verb">paint</span><b>ing</b>
          (<span class="verb">V</span><b>ing</b>)
        </td>
        <td>I</td>
        <td rowspan="2">was</td>
        <td rowspan="3" class="wideBorderBottom">being</td>
        <td rowspan="3" class="wideBorderBottom wideBorderRight">
          <span class="verb">paint</span><b>ing</b>
          (<span class="verb">V</span><b>ing</b>)
        </td>
        <td>I</td>
        <td>am not</td>
        <td rowspan="3" class="wideBorderBottom">being</td>
        <td rowspan="3" class="wideBorderBottom wideBorderRight">
          <span class="verb">paint</span><b>ing</b>
          (<span class="verb">V</span><b>ing</b>)
        </td>
      </tr>
      <tr>
        <td>He<br />She<br />It</td>
        <td>He<br />She<br />It</td>
        <td>He<br />She<br />It</td>
        <td>isn't</td>
      </tr>
      <tr>
        <td rowspan="2" class="wideBorderBottom">Were</td>
        <td class="wideBorderBottom">We<br />You<br />They</td>
        <td class="wideBorderBottom">We<br />You<br />They</td>
        <td class="wideBorderBottom">were</td>
        <td class="wideBorderBottom">We<br />You<br />They</td>
        <td rowspan="2" class="wideBorderBottom">aren't</td>
      </tr>
    </tbody>
  </table>


  <h2>3. Случаи употребления</h2>
  <table class="notesTable">
    <tbody>
      <tr>
        <td class="subHeading" colspan="2"># Процесс (в момент времени)</td>
      </tr>
      <tr>
        <td>I am painting a picture</td>
        <td class="comment">// Актив:  Я рисую картину (прямо сейчас)</td>
      </tr>
      <tr>
        <td>This picture is being painted</td>
        <td class="comment">// Пассив: Эта картина рисуется (прямо сейчас)</td>
      </tr>
      <tr>
        <td class="subHeading" colspan="2"># Процесс (в ограниченный период времени)</td>
      </tr>
      <tr>
        <td>I am painting a picture</td>
        <td class="comment">// Актив:  Я рисую картину (в данный период времени)</td>
      </tr>
      <tr>
        <td>This picture is being painted</td>
        <td class="comment">// Пассив: Эта картина рисуется (в данный период времени)</td>
      </tr>
      <tr>
        <td class="subHeading" colspan="2"># Точные планы</td>
      </tr>
      <tr>
        <td>I am painting a picture tomorrow</td>
        <td class="comment">// Актив:  Я рисую картину завтра</td>
      </tr>
      <tr>
        <td>This picture is being painted tomorrow</td>
        <td class="comment">// Пассив: Эта картина будет рисоваться завтра</td>
      </tr>
      <tr>
        <td class="subHeading" colspan="2"># Изменение</td>
      </tr>
      <tr>
        <td>My painting skills are getting better</td>
        <td class="comment">// Актив:  Мой навык рисования становится лучше</td>
      </tr>
    </tbody>
  </table>

</body>
</html>`}} style={{backgroundColor: "transparent"}}/>
      <Link href={`/quiz?lessonNumber=${lesson?.number}&type=theory`} asChild>
        <Btn>Вопросы по теории</Btn>
      </Link>
      <Link href={`/quiz?lessonNumber=${lesson?.number}&type=exercises`} asChild style={{marginTop: 20}}>
        <Btn>Упражнения</Btn>
      </Link>
    </Container>
  )
}