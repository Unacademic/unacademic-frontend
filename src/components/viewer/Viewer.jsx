/*eslint camelcase:0 */
import React from "react";

class Viewer extends React.Component {

  parse(data) {

    // read from config file? perhaps better than declaring here!
    let iframe_able = true;

    if(data.content === null){
      if(data.media.hasOwnProperty("html")) {
        return { embedly: false, content: data.media.html };
      } else {
        let https = "https";
        if(data.url.substring(0, https.length) === https || !iframe_able) {
          let warning = "<warning>The current resource could not be loaded...<br>";
          warning += "<img src='https://nyobetabeat.files.wordpress.com/2012/06/anigif_777-2432-1303312751-40.gif'/>";
          warning += "<br><br>Please refer to the following link:\n";
          return warning + "<div><a href=" + data.url + " target='_blank'>" + data.title + "</a></div></warning>";
        } else {
          return { embedly: false, content: "<iframe sandbox='allow-forms' frameborder='0' src=" + data.url + ">" + data.url + "</iframe>" };
        }
      }
    }
    return { embedly: true, content: data.content };
  }

  render() {
    let { data } = this.props;
    let html_content = this.parse(data);

    if(!html_content.embedly){
      return (
        <div className="viewer">
          <div className="content">
            <div dangerouslySetInnerHTML={{__html: html_content.content }} />
            <div className="viewer_pusher"></div>
          </div>
        </div>
      );
    }

    return (
      <div className="viewer">
        <article>
          <div dangerouslySetInnerHTML={{__html: html_content.content }} />
          <div className="viewer_pusher"></div>
        </article>
      </div>
    );
  }
}

Viewer.propTypes = {
  data: React.PropTypes.object.isRequired
};

export default Viewer;
