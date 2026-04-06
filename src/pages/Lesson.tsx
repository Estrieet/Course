import React from 'react';
import { useParams } from 'react-router-dom';
import { getLessonById } from '../services/lessonService';
import HomeworkSection from '../components/HomeworkSection';

const Lesson: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const lesson = getLessonById(Number(id));

  if (!lesson) {
    return <div className="p-6">Lesson not found</div>;
  }

  return (
    <div className="p-6" role="main">
      <h1 className="text-3xl font-bold mb-4">{lesson.title}</h1>
      <div className="mb-6 p-4 border rounded bg-white">
        <p>{lesson.content}</p>
      </div>
      <HomeworkSection homework={lesson.homework.question} lessonId={lesson.id} />
    </div>
  );
};

export default Lesson;