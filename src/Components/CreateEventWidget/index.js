import React from "react";
import Input from "../../_CustomFormComponents/NormalInput";

const CreateEventWidget = ({ onSubmit, onChange, header }) => (
  <div className="Message">
    <h2>{header}</h2>
    <form onSubmit={onSubmit} className="form messageForm">
      <Input 
        placeholder="Enter title"
        onChange={(e) => onChange(e, 'title')} />
      <Input 
        placeholder="Enter description"
        onChange={(e) => onChange(e, 'description')} />
      <button className="primary-button" type="submit">Send message</button>
    </form>
  </div>
)

export default CreateEventWidget;