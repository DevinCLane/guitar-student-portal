interface Lesson {
    id: string;
    title: string;
    content: string;
    createdAt: string;
}

interface LessonsProps {
    lessons: Lesson[];
}

const LessonsList: React.FC<LessonsProps> = ({ lessons }) => {
    return (
        <div>
            {lessons.map((lesson) => (
                <section key={lesson.id}>
                    <h3>{lesson.title}</h3>
                    <p>{lesson.content}</p>
                    <small>{lesson.createdAt}</small>
                </section>
            ))}
        </div>
    );
};

export default LessonsList;
