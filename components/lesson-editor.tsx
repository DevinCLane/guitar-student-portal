"use client";
import { Plate, usePlateEditor } from "@udecode/plate-common/react";

import { Editor } from "@/components/plate-ui/editor";

export function LessonEditor() {
    const editor = usePlateEditor();

    return (
        <Plate editor={editor}>
            <Editor placeholder="Type..." />
        </Plate>
    );
}
