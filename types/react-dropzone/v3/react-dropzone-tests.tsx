import * as React from "react";
import { DragEvent, SyntheticEvent } from "react";
import Dropzone = require("react-dropzone");
import { ImageFile } from "react-dropzone";

class Test extends React.Component {

  dz: Dropzone;

  open() {
    this.dz.open();
  }

  handleDropFile = (files: ImageFile[], e: DragEvent<HTMLDivElement>) => {};

  handleDropFiles = (accepted: File[], rejected: File[], event: DragEvent<HTMLDivElement>) => {};

  handleDefault = (e: SyntheticEvent<HTMLDivElement>) => {}

  handleFileDialog = () => {}

  render() {
    return (
      <div>
        <Dropzone
          ref={(node) => { this.dz = node }}
          onClick={this.handleDefault}
          onDrop={this.handleDropFiles}
          onDropAccepted={this.handleDropFile }
          onDropRejected={this.handleDropFile }
          onDragStart={this.handleDefault}
          onDragEnter={this.handleDefault}
          onDragLeave={this.handleDefault}
          onFileDialogCancel={this.handleFileDialog}
          style={{ borderStyle: "dashed" }}
          activeStyle={{ borderStyle: "dotted" }}
          rejectStyle={{ borderStyle: "dotted" }}
          className="regular"
          activeClassName="active"
          rejectClassName="reject"
          minSize={2000}
          maxSize={Infinity}
          disablePreview
          disableClick
          multiple={false}
          accept="*.png"
          name="dropzone"
          inputProps={{ id : "dropzone" }}
        />
      </div>
    );
  }
}

export default Test;
