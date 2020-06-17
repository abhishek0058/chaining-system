import React from "react";
import 'react-sortable-tree/style.css';
import SortableTree from "react-sortable-tree";

import CreatNewNode from "../components/createNewNode";

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rawNodes: [
        { name: "Root", parentId: "", uniqueId: "roo123" },
        { name: "Abhishek", parentId: "", uniqueId: "abh123" }
      ]
    };
  }

  render() {
    const { rawNodes, treeData } = this.state;
    return (
      <div style={{ marginTop: 20 }}>
        <div className="row">
          <div className="col-lg-12">
            <CreatNewNode 
              rawNodes={rawNodes}
              addNewNodeToTree={this.addNewNodeToTree}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12" style={{ height: 1000 }}>
            <SortableTree
              treeData={this._formatRawNodeIntoTreeView(rawNodes)}
              onChange={console.log}
            />
          </div>
        </div>
      </div>
    );
  }

  _formatRawNodeIntoTreeView = () => {
    const { rawNodes } = this.state;

    return rawNodes.map(
      ({ name: title, uniqueId }) => ({ title, expanded: false, uniqueId })
    );
  }

  addNewNodeToTree = (newNode) => {
    const { name, parentId, uniqueId } = newNode;
    if (!name || !parentId || !uniqueId) throw new Error("Bad node");
    
    this.setState({ rawNodes: [...this.state.rawNodes, newNode] });
  }
}