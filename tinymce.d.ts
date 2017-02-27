// incomplete definitions for http://www.tinymce.com

interface TinyMceObservable {
	off: (name?: string, callback?: Function) => Object
	on: (name: string, callback: Function) => Object
	fire: (name: string, args?: Object, bubble?: Boolean) => Event
}

interface TinyMceBlobInfo {
	blobUri: () => string
}

interface TinyMceBlobCache {
	create: (string, File) => TinyMceBlobInfo
	add: (TinyMceBlobInfo) => void
}

interface TinyMceEditorUpload {
	blobCache: TinyMceBlobCache
}

interface TinyMceEditor extends TinyMceObservable {
	destroy: (automatic: boolean) => void
	remove: () => void
	hide: () => void
	show: () => void
	getContent: (args?: Object) => string
	setContent: (content: string, args?: Object) => string
	focus: (skip_focus?: Boolean) => void
	undoManager: TinyMceUndoManager
	settings: Object
	editorUpload: TinyMceEditorUpload
}

interface TinyMceUndoManager {
	undo: () => Object
	clear: () => void
	hasUndo: () => Boolean
}

interface TinyMceEvent {

}

interface TinyMceStatic extends TinyMceObservable {
	init: (settings: Object) => void;
	execCommand: (c: string, u: Boolean, v: string) => Boolean;
	activeEditor: TinyMceEditor;
	get: (id: String) => TinyMceEditor;
	remove: (id: String) => void;
}

declare var tinymce: TinyMceStatic;