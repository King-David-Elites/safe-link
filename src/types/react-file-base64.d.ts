declare module 'react-file-base64' {
    interface FileBase64 {
        name: string;
        type: string;
        size: number;
        base64: string;
        file: File;
    }

    interface ReactFileBase64Props {
        multiple?: boolean;
        onDone: (files: FileBase64[] | FileBase64) => void;
    }

    const ReactFileBase64: React.FC<ReactFileBase64Props>;
    export default ReactFileBase64;
}