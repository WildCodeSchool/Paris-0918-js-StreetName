import React from 'react';
import PropTypes from 'prop-types';
import Places from 'places.js';
import "./SearchBar.css";
import Grid from '@material-ui/core/Grid';
// Implémentation de l'API algolia récupéré depuis https://github.com/kontrollanten/algolia-places-react/

export default class AlgoliaPlaces extends React.Component {
  static propTypes = {
    /** Placeholder for input field. */
    placeholder: PropTypes.string,
    /* eslint-disable react/no-unused-prop-types */
    /** https://community.algolia.com/places/documentation.html#api-events-cursorchanged */
    onCursorChanged: PropTypes.func,
    /** https://community.algolia.com/places/documentation.html#api-events-suggestions */
    onSuggestions: PropTypes.func,
    /** https://community.algolia.com/places/documentation.html#api-events-change */
    onChange: PropTypes.func,
    /** https://community.algolia.com/places/documentation.html#api-events-clear */
    onClear: PropTypes.func,
    /** https://community.algolia.com/places/documentation.html#api-events-limit */
    onLimit: PropTypes.func,
    /** https://community.algolia.com/places/documentation.html#api-events-error */
    onError: PropTypes.func,
    /** https://community.algolia.com/places/documentation.html#options */
    options: PropTypes.shape({
      type: PropTypes.oneOf([
        'city',
        'country',
        'address',
        'busStop',
        'trainStation',
        'townhall',
        'airport',
      ]),
      countries: PropTypes.arrayOf((propValue, key, componentName, location, propFullName) => {
        if (propValue[key].length !== 2) {
          return new Error(`Invalid prop \`${propFullName}\` supplied to` +
            ` \`${componentName}\`. Validation failed.`);
        }
        return true;
      }),
      aroundLatLng: PropTypes.string,
      aroundLatLngViaIP: PropTypes.bool,
      aroundRadius: PropTypes.number,
      templates: PropTypes.object,
      style: PropTypes.bool,
      appId: PropTypes.string,
      apiKey: PropTypes.string,
      useDeviceLocation: PropTypes.bool,
      computeQueryParams: PropTypes.object,
      clientOptions: PropTypes.object,
      autocompleteOptions: PropTypes.object,
      insideBoundingBox: PropTypes.string,
      insidePolygon: PropTypes.string,
    }),
  };

  static defaultProps = {
    placeholder: 'Type an address',
    onCursorChanged: null,
    onSuggestions: null,
    onChange: null,
    onClear: null,
    onLimit: null,
    onError: null,
    options: {},
  };

  componentDidMount() {
    this.autocomplete = Places({
      ...this.props.options,
      container: this.autocompleteElem,
    });
    const geol = document.querySelector('#loco')
    geol.addEventListener("mouseup", (event) => {
      setTimeout(()=>{  //timeout 380 ms pour attendre que la props s'initie
        this.autocomplete.setVal(this.props.valeur)
      this.autocomplete.open()},380)
    })
    // const clear = document.querySelector('#buttonClear')
    // clear.addEventListener("mouseup", (event) => {
    //   setTimeout(()=>{  //timeout 380 ms pour attendre que la props s'initie
    //     this.autocomplete.setVal('')
    //   },380)
    // })
    this.autocompleteListeners = [
      'onSuggestions',
      'onCursorChanged',
      'onChange',
      'onClear',
      'onLimit',
      'onError',
    ]
      .filter(prop => !!this.props[prop])
      .map(prop => ({ prop, eventName: prop.substr(2).toLowerCase() }));

    this.autocompleteListeners
      .forEach(({ prop, eventName }) => this.autocomplete.on(eventName, this.props[prop]));
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillUnmount() {
    this.autocompleteListeners
      .forEach(({ eventName }) => this.autocomplete.removeAllListeners(eventName));
  }

  render() {
    const {
      onChange,
      onClear,
      onCursorChanged,
      onError,
      onLimit,
      onSuggestions,
      options,
      ...inputProps
    } = this.props;

    return (
      <div>
        <Grid container>
        <Grid item xs></Grid>
        <Grid item xs={9}>
        <input
          type="text"
          aria-label={this.props.placeholder}
          ref={(ref) => { this.autocompleteElem = ref; }}
          {...inputProps}
        placeholder="Nom de ta rue ..."/>
        </Grid>
        <Grid item xs></Grid>
        </Grid>
      </div>
    );
  }
}
