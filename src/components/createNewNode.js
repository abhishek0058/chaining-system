import React from "react";
import { getNewNode } from "../util";

export default class CreateNewNode extends React.Component {

  state = {
    name: "",
    selectedParent: ""
  }

  render() {
    const { name, selectedParent } = this.state;
    const { rawNodes } = this.props;
    return (
      <div className="row">
        <div className="col-lg-4">
          <input 
            type="text" 
            name={name}
            className="form-control"
            placeholder="Enter name" 
            onChange={e => this.setState({ name: e.target.value })}
          />
        </div>
        <div className="col-lg-4">
          <select 
            className="form-control" 
            value={selectedParent} 
            onChange={e => this.setState({ selectedParent: e.target.value })}
          >
            <option value="">Select Parent</option>
            {rawNodes.map(node => <option key={node.uniqueId} value={node.uniqueId}>{node.name}</option>)}
          </select>
        </div>
        <div className="col-lg-4">
          <button 
            className="btn btn-primary btn-block"
            onClick={this._handleCreate}
          >
            Create
          </button>
        </div>
      </div>
    );
  }

  _handleCreate = () => {
    const { name, selectedParent } = this.state;
    const { rawNodes, addNewNodeToTree } = this.props;

    const parentNode = rawNodes.find(({ uniqueId }) => uniqueId === selectedParent);

    addNewNodeToTree(getNewNode({ name, parentNode }));
  }

}