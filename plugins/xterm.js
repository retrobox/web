import { Terminal } from 'xterm'
import { FitAddon } from 'xterm-addon-fit'

export default () => {
  window.Terminal = Terminal
  window.FitAddon = FitAddon
}
