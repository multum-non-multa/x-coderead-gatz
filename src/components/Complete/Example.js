import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'

import theme from 'prism-react-renderer/themes/vsLight'

//

const exampleCode = `
(function someDemo() {
  var test = "Hello World!";
  console.log(test);
})();

return () => <App />;
`

//
const Example = props => {
  const className = props.children.props.className

  let language

  if (className) {
    language = className.replace(/language-/, '')
  } else {
    language = 'python'
  }

  return (
    <Highlight
      {...defaultProps}
      code={props.children.props.children.trim()}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default Example
