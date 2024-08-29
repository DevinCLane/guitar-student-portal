import {
    usePlateEditor,
    Plate,
    PlateContent,
} from "@udecode/plate-common/react";

export default function BasicEditor() {
    const editor = usePlateEditor();

    return (
        <Plate editor={editor}>
            <PlateContent placeholder="Type..." />
        </Plate>
    );
}
