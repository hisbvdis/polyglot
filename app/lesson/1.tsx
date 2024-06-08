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
      table-layout: fixed;
      inline-size: 650px;
    }
    td {
      padding: 5px;
      border: 1px solid #ccc;
    }
    tr:nth-child(-n+4) {
      background-color: #fff7e5;
    }
    tr:nth-child(n+5) {
      background-color: #e5f5e6;
    }
    tr:nth-child(n+8) {
      background-color: #fce9e5;
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
    .noun {
      color: #e5f5e6;
      font-weight: bold;
    }
  </style>
  <title>Document</title>
</head>
<body>
  <div style="overflow-y: scroll; max-width: 100%;">
    <table>
      <tbody>
        <tr>
          <td class="heading"></td>
          <td class="heading" colspan="3">Вопрос</td>
          <td class="heading" colspan="3">Утверждение</td>
          <td class="heading" colspan="3">Отрицание</td>
        </tr>
        <tr>
          <td rowspan="3" class="heading heading--aside">Будущее</td>
          <td rowspan="3" class="wideBorderBottom">Will</td>
          <td>I</td>
          <td rowspan="3" class="wideBorderBottom wideBorderRight">
            <span class="verb">paint</span>
          </td>
          <td>I</td>
          <td rowspan="3" class="wideBorderBottom">will</td>
          <td rowspan="3" class="wideBorderBottom wideBorderRight">
            <span class="verb">paint</span>
          </td>
          <td>I</td>
          <td rowspan="3" class="wideBorderBottom">will not</td>
          <td rowspan="3" class="wideBorderBottom wideBorderRight">
            <span class="verb">paint</span>
          </td>
        </tr>
        <tr>
          <td>He<br/>She<br/>It</td>
          <td>He<br/>She<br/>It</td>
          <td>He<br/>She<br/>It</td>
        </tr>
        <tr>
          <td class="wideBorderBottom">We<br/>You<br/>They</td>
          <td class="wideBorderBottom">We<br/>You<br/>They</td>
          <td class="wideBorderBottom">We<br/>You<br/>They</td>
        </tr>
        <tr>
          <td rowspan="3" class="heading heading--aside">Настоящее</td>
          <td>Do</td>
          <td>I</td>
          <td rowspan="3" class="wideBorderBottom wideBorderRight">
            <span class="verb">paint</span>
          </td>
          <td>I</td>
          <td colspan="2" class="wideBorderRight">
            <span class="verb">paint</span>
          </td>
          <td>I</td>
          <td>don't</td>
          <td rowspan="3" class="wideBorderBottom wideBorderRight">
            <span class="verb">paint</span>
          </td>
        </tr>
        <tr>
          <td>Does</td>
          <td>He<br/>She<br/>It</td>
          <td>He<br/>She<br/>It</td>
          <td colspan="2" class="wideBorderRight">
            <span class="verb">paint</span><b>s</b> (<span class="verb">V</span><b>s</b>)</td>
          <td>He<br/>She<br/>It</td>
          <td>doesn't</td>
        </tr>
        <tr>
          <td class="wideBorderBottom">Do</td>
          <td class="wideBorderBottom">We<br/>You<br/>They</td>
          <td class="wideBorderBottom">We<br/>You<br/>They</td>
          <td class="wideBorderBottom wideBorderRight" colspan="2">
            <span class="verb">paint</span>
          </td>
          <td class="wideBorderBottom">We<br/>You<br/>They</td>
          <td class="wideBorderBottom">don't</td>
        </tr>
        <tr>
          <td rowspan="3" class="heading heading--aside">Прошедшее</td>
          <td rowspan="3" class="wideBorderBottom">Did</td>
          <td>I</td>
          <td rowspan="3" class="wideBorderBottom wideBorderRight">
            <span class="verb">paint</span>
          </td>
          <td>I</td>
          <td rowspan="3" colspan="2" class="wideBorderBottom wideBorderRight">
            <span class="verb">paint</span><b>ed</b> (<span class="verb">V</span><b>2</b>)</td>
          <td>I</td>
          <td rowspan="3" class="wideBorderBottom">didn't</td>
          <td rowspan="3" class="wideBorderBottom wideBorderRight">
            <span class="verb">paint</span>
          </td>
        </tr>
        <tr>
          <td>He<br/>She<br/>It</td>
          <td>He<br/>She<br/>It</td>
          <td>He<br/>She<br/>It</td>
        </tr>
        <tr>
          <td class="wideBorderBottom">We<br/>You<br/>They</td>
          <td class="wideBorderBottom">We<br/>You<br/>They</td>
          <td class="wideBorderBottom">We<br/>You<br/>They</td>
        </tr>
      </tbody>
    </table>
  </div>
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