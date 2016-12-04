import React, { PropTypes } from 'react';
import WritableList from 'COMPONENTS/WritableList';
import Input from 'COMPONENTS/Input';

class WorkProject extends React.Component {
  constructor(props) {
    super(props);
    this.addDetail = this.addDetail.bind(this);
    this.deleteDetail = this.deleteDetail.bind(this);
    this.changeDetail = this.changeDetail.bind(this);
    this.handleProjectChange = this.handleProjectChange.bind(this);
  }

  addDetail(detail) {
    const { project, onChange } = this.props;
    onChange && onChange({
      details: [...project.details, detail]
    });
  }

  deleteDetail(index) {
    const { project, onChange } = this.props;
    const { details } = project;
    onChange && onChange({
      details: [...details.slice(0, index), ...details.slice(index + 1)]
    });
  }

  changeDetail(index, detail) {
    const { project, onChange } = this.props;
    const { details } = project;
    onChange && onChange({
      details: [...details.slice(0, index), detail, ...details.slice(index + 1)]
    });
  }

  handleProjectChange(type) {
    const { onChange } = this.props;
    return (value) => {
      onChange && onChange({[type]: value})
    }
  }

  render() {
    const { project, onChange } = this.props;
    return (
      <div className="project_container">
        <div className="project_name_wrapper">
          <Input
            value={project.name}
            placeholder="项目名称"
            onChange={this.handleProjectChange('name')}
          />
        </div>
        {/* <div className="project_title">
          {project.name}
        </div> */}
        <WritableList
          items={project.details}
          onAdd={this.addDetail}
          onDelete={this.deleteDetail}
          onChange={this.changeDetail}
        />
      </div>
    )
  }
}

export default WorkProject
