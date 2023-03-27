import { React, Component } from "react";
import "./booking-widget.css";
import DatePicker from "react-datepicker";
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';

class BookingWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      startdatePickerIsOpen: false,
      endDate: new Date(),
      enddatePickerIsOpen: false,
      startDateString: null,
      endDateString:null,
      selected:null,
      setSelected:null
    }

    this.handlestartChange = this.handlestartChange.bind(this);
    this.handleendChange = this.handleendChange.bind(this);
    this.openstartDatePicker = this.openstartDatePicker.bind(this);
    this.openendDatePicker = this.openendDatePicker.bind(this);
  }

  handlestartChange(date) {
    this.setState({
      startDate: date,
      startDateString: date.toLocaleDateString()
    });
  }
  handleendChange(date) {
    this.setState({
      endDate: date,
      endDateString: date.toLocaleDateString()
    });
  }
  openstartDatePicker() {
    this.setState({
      startdatePickerIsOpen: !this.state.startdatePickerIsOpen,
    });

  };
  openendDatePicker() {
    this.setState({
      enddatePickerIsOpen: !this.state.enddatePickerIsOpen,
    });
  };


  render() {
    return (
      <div className="bw-container border border-dark row">
        <div className="col-sm-4">
          <div>Where?</div>
          {/* <div><Typeahead
            id="basic-example"
            onChange={setSelected}
            options={options}
            placeholder="Choose a state..."
            // selected={selected}
          /></div> */}
        </div>
        <div className="col-sm-2 left-border"><div>Start date</div><div><a onClick={this.openstartDatePicker}>{this.state.startDateString ? this.state.startDateString : 'Add Date'}</a>
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handlestartChange}
            onClickOutside={this.openstartDatePicker}
            onSelect={this.openstartDatePicker}
            open={this.state.startdatePickerIsOpen}
            value={this.state.startDate}
            className="datePicker"

          />
        </div></div>
        <div className="col-sm-2 left-border"><div>End date</div><div><a onClick={this.openendDatePicker}>{this.state.endDateString ? this.state.endDateString : 'End Date'}</a>
          <DatePicker
            selected={this.state.endDate}
            onChange={this.handleendChange}
            onClickOutside={this.openendDatePicker}
            onSelect={this.openendDatePicker}
            open={this.state.enddatePickerIsOpen}
            value={this.state.endDate}
            className="datePicker"

          />
        </div>
        </div>
        <div className="col-sm-2 left-border">
          <div>Who</div>
          <div>Add guests</div>
        </div>
        <div className="col-sm-2"><button type="button" className="btn btn-outline-secondary">SEARCH</button></div>
      </div>
    );
  }
}
export default BookingWidget;  