import { database } from "./firebase";


/**
 * Creates an event in the real time database, returns a promise
 * @param {object} payload This is the event object containing the event data being sent to the database
 * @param {string} eventId A unique event id is given to each created event
 */
export const createEvent = (payload) => {
  return database.ref(`events`).push().set(payload);
}

/**
 * Fetch all events
 */
export const fetchNewEvents = () => {
  return database.ref(`events`);
}


/**
 * Message schema will be like following:
 * Each user has a messages object containing all the users messages.
 * Each message has a message id
 */

/**
 *  /Users
 *    /user1 (unique id)
 *      /account-info
 *    /user2 (unique id)
 *      /account-info
 * 
 *  /Users-info
 *    /user1 (unique id)
 *      /meta-data
 *    /user2 (unique id)
 *      /meta-data
 * 
 * Show events that a user is coming to
 *  /users
 *    /user1 (unique id)
 *      /events
 *        /event1 (unique id)
 *        /event2
 *        /event3
 *    /user2
 *      /events
 *        /event1
 *        /event2
 *        /event3
 *
 * Events can be created and each event will have some basic event data such as: 
 * - title
 * - description
 * - createdAt
 * - startEventDate
 * - endEventDate
 * - eventImage
 * 
 * We will store all of this information under /event-basic-info and denormalize specific
 * things that are needed for a preview view of the application where we only might need
 * - title
 * - summary
 * - photo 
 * 
 *  /events
 *    /event1 (unique id)
 *      /event-basic-info
 *    /event2 (unique id)
 *      /event-basic-info
 *    /event3 (unique id)
 *      /event-basic-info
 *    /event4 (unique id)
 *      /event-basic-info
 * 
 * Here we have another schema showing users who are coming for each event
 *  /events
 *    /event1 (unique id)
 *      /members-coming
 *        /user1
 *        /user2
 *        /user3
 *    /event2 (unique id)
 *      /members
 *        /user6
 *        /user2
 *        /user7
 *    /event3 (unique id)
 *    /event4 (unique id)
 *    
 */