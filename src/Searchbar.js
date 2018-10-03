import React from 'react';
import AlgoliaPlaces from './AlgoliaPlaces';
 

export default () => {
  return (
    <AlgoliaPlaces
    container= 'id_city'
 
    valeurr='eee'
      placeholder='Nom de ta rue ...'
 
      options={{
        appId: 'plRZBW9D9AP1',
        apiKey: '412709398690b7300f440d212a96dee4',
        language: 'fr',
        countries: ['fr'],
        type: 'address',
        insideBoundingBox:  "48.896, 2.394, 48.84, 2.25",
        useDeviceLocation: true,
        aroundLatLng: false,
        aroundRadius: 1,
        aroundLatLngViaIP: true
        // Other options from https://community.algolia.com/places/documentation.html#options
      }}
 
      onChange={({ query, rawAnswer, suggestion, suggestionIndex }) => 
        console.log('Rue sélectionné : ' + suggestion.name)}
 
      onSuggestions={({ rawAnswer, query, suggestions }) => 
        console.log('Fired when dropdown receives suggestions. You will receive the array of suggestions that are displayed.')}
 
      onCursorChanged={({ rawAnswer, query, suggestion, suggestonIndex }) => 
        console.log('Fired when arrows keys are used to navigate suggestions.')}
 
      onClear={() => 
        console.log('Fired when the input is cleared.')}
 
      onLimit={({ message }) => 
        console.log('Fired when you reached your current rate limit.')}
 
      onError={({ message }) => 
        console.log('Fired when we could not make the request to Algolia Places servers for any reason but reaching your rate limit.')}
    />
  );  
}