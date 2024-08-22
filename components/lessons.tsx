interface Lesson {
    id: string;
    title: string;
    content: string;
    createdAt: string;
}

interface LessonProps {
    lesson: Lesson[];
}

const Lessons: React.FC<LessonProps> = ({ lesson }) => {
    return (
        <div>
            {lesson.map((lesson) => (
                <section key={lesson.id}>
                    <h3>{lesson.title}</h3>
                    <p>{lesson.content}</p>
                    <small>{lesson.createdAt}</small>
                </section>
            ))}
        </div>
    );
};
