
/**
 * 
 * Takes a given resource and insures that it is loaded into the current page.
 * 
 * Design: By default, resources should be loaded at different times according to their type.  For example, images and other independent items should be loaded immediately, but order dependent items should be added once the page is loaded, in the order they were added.
 *    Resource attempt order:  for each resource, there is a small number of "impulse" resource locations.  These are attempted first.
 *
 * Options:
 *	Locations: an array of possible locations of the resource.  
 *  Insist: (true / impulse / false) 
 *      -If true, insists that every attempt be made to get this resource before moving on to other resources.
 *      -If impulse, insists that every impulse location be attempted before moving on to other resources.
 */
var oxGet = function (resource, opts) {

};

/**
 * 
 * Adds a resource to be loaded to the queue 
 */
var ox.add = function (resource, opts) {

};

/**
 *
 * Adds a new possible location of the resource
 */
var ox.addLocation = function (resource, location, opts) {

};

/**
 * 
 * Takes in a string, and returns a resource object.
 */
var ox.createResourceObj = function (resource, opts) {

};

/**
 *
 * Goes through the list of resources, and attempts to load each one.
 * If the resource is marked as insist(true), then the resource will have every attempt made to be loaded.
 * If insist=impulse, then every impulse location will be attempted before moving to the next resource.
 */
var ox.load = function () {
    // Loop through each resource
	  // Keep track of what iteration this is.  
	  
	  // If insist=true
		// Loop through all impulse locations for the resource
			// Attempt to load from the location
			// If attempt succeeded, then move along
	    // If it got this far, then attempt to do a stubborn load (oxget)of the resource
		    // If load failed, then return error.
	  
	  // If insist=impulse 
        // Loop through all impulse locations for the resource
			// Attempt to load from the location
			// If attempt succeeded, then move along
	    // If the resource hasn't been loaded and the iteration isn't greater than the number of impulse locations (has no more locations to try)
	        // Attempt to load the resource
      // If insist = anything else or unspecified, do an iterative load
	    // Attempt to load location i, where i= the iteration number
		
	// Loop through each resource
	  // If it has been successfully loaded, or oxget has been attempted, move along
	  // Otherwise try to stubbornly get the resource.
};

/**
 * Adds a manifest of resources to the ox directory.
 * Should accept either a JSON string or a URL (presumably with a JSON string)
 */
var ox.addManifest = function (manifest) {
  // Determine the type of the imput
  
    // If it is a string, attempt to load URL
	
	// If it is an object, attempt to load as manifest
};

/**
 * Prototype for resources
 * 
 * Properties and Methods:
 *   -impulseLocations - A property containing an array of "impulse locations" for a given resource.
 *   -oxGet - A function to try to find the resource in the event that none of the impulse locations worked.
 */
 