import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

const context = require.context('./src', true, /__tests__\/(\w+).js$/)

context.keys().forEach(context)
