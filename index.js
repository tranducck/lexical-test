import {$getRoot, createEditor, TextNode, ParagraphNode, KEY_ENTER_COMMAND, COMMAND_PRIORITY_CRITICAL} from 'lexical'
import {registerPlainText} from '@lexical/plain-text'

function initPlainText(editor, initialEditorState) {
	return registerPlainText(editor)
}

const editor = createEditor({
	onError: console.error,
	nodes: [TextNode, ParagraphNode],
})

editor.setRootElement(document.getElementById('editor'))
initPlainText(editor)
editor.registerCommand(
	KEY_ENTER_COMMAND,
	(e) => {
		console.log('KEY_ENTER_COMMAND')
		return true
	},
	COMMAND_PRIORITY_CRITICAL,
)

document.addEventListener('keydown', (e) => {
	console.log('window onKeydow Event code', e.code)
})
