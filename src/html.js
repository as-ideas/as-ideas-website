import React from "react"
import PropTypes from "prop-types"

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
      <head>
        <meta charSet="utf-8"/>
        <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta name="author" content="Axel Springer Ideas Engineering GmbH"/>

        <script async type="text/javascript" src="//d1tkl4ncuw8oqk.cloudfront.net/oil/ideas-engineering-io/1.3.0/oilstub.1.3.0-RELEASE.min.js"/>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-124834155-1"/>

        {this.props.headComponents}
      </head>
      <body {...this.props.bodyAttributes}>
        <script async type="text/javascript" src="//d1tkl4ncuw8oqk.cloudfront.net/oil/ideas-engineering-io/1.3.0/oil.1.3.0-RELEASE.min.js"/>
      {this.props.preBodyComponents}

      <div
        key={`body`}
        id="___gatsby"
        dangerouslySetInnerHTML={{__html: this.props.body}}
      />

      {this.props.postBodyComponents}


      </body>
      </html>
    )
  }
};

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
