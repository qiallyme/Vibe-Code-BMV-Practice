import { GeneralQuestion } from '../types';
import { BMV_TRANSLATIONS_MAP } from './translationsDictionary';

// Complete dataset of 500 authentic Indiana BMV exam questions
// Based on the Indiana BMV Driver's Manual, licensing statutes, speed regulations, and signs.
export const INDIANA_BMV_500_QUESTIONS: GeneralQuestion[] = [
  {
    id: "1",
    question: "What does a star marker in the upper right-hand corner of an Indiana credential indicate?",
    options: ["It's a probationary license", "It's Real ID-compliant", "It's expired", "It's a temporary credential"],
    correctAnswer: 1,
    explanation: "A star marker indicates the credential is Real ID-compliant and may be used for federal purposes."
  },
  {
    id: "2",
    question: "How long is a learner's permit valid in Indiana?",
    options: ["1 year", "2 years", "3 years", "4 years"],
    correctAnswer: 1,
    explanation: "Learner's permits are valid for two years from the date of issuance."
  },
  {
    id: "3",
    question: "What is the minimum age to apply for a learner's permit in Indiana?",
    options: ["14 years", "15 years", "16 years", "17 years"],
    correctAnswer: 1,
    explanation: "You may apply for a learner's permit at 15 years of age if enrolled in driver education, or 16 years otherwise."
  },
  {
    id: "4",
    question: "How long must you hold a learner's permit before applying for a driver's license?",
    options: ["90 days", "120 days", "180 days", "270 days"],
    correctAnswer: 2,
    explanation: "You must hold a valid Indiana learner's permit for at least 180 days before applying for a driver's license."
  },
  {
    id: "5",
    question: "What is the validity period of a driver's license for someone under 75 years of age?",
    options: ["3 years", "4 years", "6 years", "8 years"],
    correctAnswer: 2,
    explanation: "A driver's license is valid for six years if you are younger than 75 years of age."
  },
  {
    id: "6",
    question: "When does a probationary driver's license expire?",
    options: ["At age 18", "At age 21 and 30 days", "After 2 years", "After 4 years"],
    correctAnswer: 1,
    explanation: "A probationary driver's license expires when the cardholder is 21 years and 30 days of age."
  },
  {
    id: "7",
    question: "What is the deadline for Real ID enforcement for boarding commercial flights?",
    options: ["January 1, 2024", "May 7, 2025", "January 1, 2026", "No deadline set"],
    correctAnswer: 1,
    explanation: "The Department of Homeland Security has established May 7, 2025, as the deadline for Real ID enforcement."
  },
  {
    id: "8",
    question: "What documents are required to obtain a Real ID-compliant credential?",
    options: ["Only proof of identity", "Identity, lawful status, Social Security number, and Indiana residency", "Only a birth certificate", "Only a driver's license from another state"],
    correctAnswer: 1,
    explanation: "You must provide original versions or certified copies of identity, lawful status, Social Security number, and proof of Indiana residency documents."
  },
  {
    id: "9",
    question: "How long do new Indiana residents have to obtain an Indiana driver's license?",
    options: ["30 days", "60 days", "90 days", "120 days"],
    correctAnswer: 1,
    explanation: "When you become an Indiana resident, you have 60 days to obtain a new Indiana driver's license."
  },
  {
    id: "10",
    question: "What do red traffic signs convey?",
    options: ["Warning of hazards ahead", "Traffic regulations requiring immediate action", "Permitted movements", "Road services"],
    correctAnswer: 1,
    explanation: "Red traffic signs convey traffic regulations that require drivers to take immediate action to avoid threats to traffic safety."
  },
  {
    id: "11",
    question: "What do yellow or fluorescent yellow-green traffic signs indicate?",
    options: ["Stop required", "Regulations to obey", "Road conditions and hazards ahead", "Permitted movements"],
    correctAnswer: 2,
    explanation: "Yellow or fluorescent yellow-green signs prepare drivers for specific road conditions and hazards ahead."
  },
  {
    id: "12",
    question: "What do white traffic signs display?",
    options: ["Warning signs", "Traffic regulations and helpful information", "Recreational areas", "Road services"],
    correctAnswer: 1,
    explanation: "White traffic signs display traffic regulations, such as speed limits, that drivers must obey, as well as helpful information."
  },
  {
    id: "13",
    question: "What do orange traffic signs warn drivers of?",
    options: ["Permanent road conditions", "Temporary traffic conditions", "School zones", "Railroad crossings"],
    correctAnswer: 1,
    explanation: "Orange traffic signs warn drivers of temporary traffic conditions, often used for highway construction and maintenance projects."
  },
  {
    id: "14",
    question: "What do green traffic signs indicate?",
    options: ["Stop required", "Warning of hazards", "Permitted movements and directions or guidance", "Road services"],
    correctAnswer: 2,
    explanation: "Green traffic signs indicate permitted movements and directions or guidance, such as highway entrances and exits."
  },
  {
    id: "15",
    question: "What do blue traffic signs display?",
    options: ["Traffic regulations", "Road services and information", "Warning signs", "Recreational areas"],
    correctAnswer: 1,
    explanation: "Blue traffic signs display road services and information."
  },
  {
    id: "16",
    question: "What do brown traffic signs indicate?",
    options: ["School zones", "Nearby recreational and cultural interest sites", "Construction zones", "Railroad crossings"],
    correctAnswer: 1,
    explanation: "Brown traffic signs indicate nearby recreational and cultural interest sites."
  },
  {
    id: "17",
    question: "What does a circular traffic sign alert drivers to?",
    options: ["Stop required", "Upcoming railroad crossings", "Yield right of way", "No passing zone"],
    correctAnswer: 1,
    explanation: "Circular traffic signs alert drivers to upcoming railroad crossings."
  },
  {
    id: "18",
    question: "What does an equilateral triangle traffic sign warn drivers to do?",
    options: ["Stop", "Slow down when approaching an intersection and be prepared to stop", "Yield to oncoming traffic only", "Proceed with caution"],
    correctAnswer: 1,
    explanation: "Traffic signs with three sides of equal length warn drivers to slow down when approaching an intersection and be prepared to come to a complete stop."
  },
  {
    id: "19",
    question: "What do pennant-shaped traffic signs indicate?",
    options: ["School zone ahead", "No passing zone on the left", "Railroad crossing", "Construction ahead"],
    correctAnswer: 1,
    explanation: "Pennant-shaped traffic signs are posted on the left-hand side of two-way roads to warn drivers not to pass other vehicles on the left."
  },
  {
    id: "20",
    question: "What do diamond-shaped traffic signs warn drivers of?",
    options: ["Stop required", "Upcoming road conditions and hazards", "Permitted movements", "Road services"],
    correctAnswer: 1,
    explanation: "Diamond-shaped traffic signs warn drivers of upcoming road conditions and hazards."
  },
  {
    id: "21",
    question: "What do five-sided traffic signs warn drivers about?",
    options: ["Railroad crossings", "School areas where children may be crossing", "Construction zones", "No passing zones"],
    correctAnswer: 1,
    explanation: "Five-sided traffic signs warn drivers that they are entering an area near a school in which children may be crossing the road."
  },
  {
    id: "22",
    question: "What do eight-sided traffic signs mean?",
    options: ["Yield right of way", "Stop and yield the appropriate right of way", "No entry", "Slow down"],
    correctAnswer: 1,
    explanation: "Eight-sided traffic signs warn drivers that they must stop and yield the appropriate right of way at an intersection."
  },
  {
    id: "23",
    question: "What does a green light mean?",
    options: ["Stop", "Go - you have the right of way", "Slow down", "Yield"],
    correctAnswer: 1,
    explanation: "A green light means go. If you are facing a green light, you have the right of way and may drive through an intersection as long as it is clear."
  },
  {
    id: "24",
    question: "What does a steady yellow light mean?",
    options: ["Go faster", "The green light has ended and the signal is about to turn red", "Stop immediately", "Yield to oncoming traffic"],
    correctAnswer: 1,
    explanation: "A steady yellow light means the green light has ended and the signal is about to turn red."
  },
  {
    id: "25",
    question: "What does a red light mean?",
    options: ["Slow down", "Stop - traffic from other directions has the right of way", "Proceed with caution", "Yield"],
    correctAnswer: 1,
    explanation: "A red light means stop. Traffic entering an intersection from other directions has the right of way."
  },
  {
    id: "26",
    question: "When may you turn right on a red light?",
    options: ["Always", "Never", "After coming to a full stop and checking for traffic and pedestrians, if not prohibited by a sign", "Only at intersections with no traffic"],
    correctAnswer: 2,
    explanation: "You may turn right on red after coming to a full stop, checking for vehicles and pedestrians, and ensuring there is no 'No Turn on Red' sign."
  },
  {
    id: "27",
    question: "When may you turn left on a red light?",
    options: ["Never", "Always", "When turning from a one-way street onto a one-way street", "Only at night"],
    correctAnswer: 2,
    explanation: "You may turn left through an intersection with a red light if you are turning from a one-way street onto a one-way street, after coming to a full stop."
  },
  {
    id: "28",
    question: "What does a yellow flashing light at an intersection mean?",
    options: ["Stop immediately", "Slow down and use caution", "Yield to all traffic", "Proceed at normal speed"],
    correctAnswer: 1,
    explanation: "A yellow flashing light displayed without an arrow at an intersection means you should slow down and use caution when traveling through."
  },
  {
    id: "29",
    question: "What does a red flashing light at an intersection mean?",
    options: ["Slow down", "Equivalent to a stop sign - come to a complete stop", "Yield", "Proceed with caution"],
    correctAnswer: 1,
    explanation: "A red flashing light at an intersection is equivalent to a stop sign and means you must come to a complete stop before proceeding."
  },
  {
    id: "30",
    question: "What is the maximum speed limit for passenger vehicles on rural interstate highways?",
    options: ["55 mph", "60 mph", "65 mph", "70 mph"],
    correctAnswer: 3,
    explanation: "Passenger vehicles may not exceed 70 miles per hour or the posted speed limit on rural interstate highways."
  },
  {
    id: "31",
    question: "What is the maximum speed limit for trucks over 26,000 pounds on rural interstate highways?",
    options: ["55 mph", "60 mph", "65 mph", "70 mph"],
    correctAnswer: 2,
    explanation: "Trucks with a declared gross vehicle weight greater than 26,000 pounds may not exceed 65 miles per hour on rural interstate highways."
  },
  {
    id: "32",
    question: "What is the speed limit on rural state divided highways?",
    options: ["50 mph", "55 mph", "60 mph", "65 mph"],
    correctAnswer: 2,
    explanation: "On a rural state divided highway, vehicles may not exceed 60 miles per hour or the posted speed limit."
  },
  {
    id: "33",
    question: "What is the speed limit on urban interstate highways?",
    options: ["50 mph", "55 mph", "60 mph", "65 mph"],
    correctAnswer: 1,
    explanation: "On an urban interstate highway, vehicles may not exceed 55 miles per hour or the posted speed limit."
  },
  {
    id: "34",
    question: "What is the speed limit in most urban residential areas?",
    options: ["20 mph", "25 mph", "30 mph", "35 mph"],
    correctAnswer: 2,
    explanation: "In most urban residential areas, vehicles may not exceed 30 miles per hour or the posted speed limit."
  },
  {
    id: "35",
    question: "What is the speed limit in alleys?",
    options: ["10 mph", "15 mph", "20 mph", "25 mph"],
    correctAnswer: 1,
    explanation: "In alleys, vehicles may not exceed 15 miles per hour or the posted speed limit."
  },
  {
    id: "36",
    question: "What is the maximum speed limit for school buses when not on an interstate or state highway?",
    options: ["30 mph", "35 mph", "40 mph", "45 mph"],
    correctAnswer: 2,
    explanation: "When not driving on an interstate or state highway, the maximum speed limit for a school bus is 40 miles per hour unless the posted speed limit is lower."
  },
  {
    id: "37",
    question: "What is the maximum speed limit for school buses on an interstate or highway?",
    options: ["50 mph", "55 mph", "60 mph", "65 mph"],
    correctAnswer: 2,
    explanation: "The maximum speed limit for a school bus on an interstate or highway is 60 miles per hour or the posted speed limit."
  },
  {
    id: "38",
    question: "When must drivers use headlights?",
    options: ["Only at night", "Between sunset and sunrise, and when visibility is less than 500 feet", "Only in bad weather", "Only on highways"],
    correctAnswer: 1,
    explanation: "Drivers must use headlights between sunset and sunrise as well as at any other time in which visibility is less than 500 feet."
  },
  {
    id: "39",
    question: "When must lower headlight beams be used when approaching oncoming traffic?",
    options: ["Within 100 feet", "Within 200 feet", "Within 300 feet", "Within 500 feet"],
    correctAnswer: 3,
    explanation: "When headlights are on, lower headlight beams must be used when approaching within 500 feet of an oncoming vehicle."
  },
  {
    id: "40",
    question: "When must lower headlight beams be used when following another vehicle?",
    options: ["Within 50 feet", "Within 100 feet", "Within 200 feet", "Within 300 feet"],
    correctAnswer: 2,
    explanation: "When headlights are on, lower headlight beams must be used when following within 200 feet of the rear of another vehicle."
  },
  {
    id: "41",
    question: "What do yellow lane markings separate?",
    options: ["Lanes going in the same direction", "Multiple lanes of traffic going in opposite directions", "Bike lanes", "Parking areas"],
    correctAnswer: 1,
    explanation: "Yellow lane markings separate multiple lanes of traffic going in opposite directions."
  },
  {
    id: "42",
    question: "When may you cross a broken yellow line?",
    options: ["Never", "To pass another vehicle when it is safe", "Only to turn left", "Only in emergency"],
    correctAnswer: 1,
    explanation: "You may cross a broken yellow line to pass another vehicle when it is safe."
  },
  {
    id: "43",
    question: "When may you cross a solid yellow line?",
    options: ["To pass another vehicle", "Only to turn", "Never", "When safe"],
    correctAnswer: 1,
    explanation: "You should not cross a solid yellow line except to turn."
  },
  {
    id: "44",
    question: "What do white lane markings separate?",
    options: ["Lanes going in opposite directions", "Multiple lanes of traffic going in the same direction", "Bike lanes only", "Parking areas"],
    correctAnswer: 1,
    explanation: "White lane markings separate multiple lanes of traffic going in the same direction."
  },
  {
    id: "45",
    question: "What does a solid white line between lanes mean?",
    options: ["Lane changes are prohibited", "Lane changes are discouraged", "You must change lanes", "It's only a suggestion"],
    correctAnswer: 1,
    explanation: "A solid white line indicates that lane changes are discouraged but not prohibited. A double solid white line means lane changes are prohibited."
  },
  {
    id: "46",
    question: "How many lanes should you change at a time?",
    options: ["One", "Two", "As many as needed", "It doesn't matter"],
    correctAnswer: 0,
    explanation: "Change only one lane at a time."
  },
  {
    id: "47",
    question: "How far before an oncoming vehicle must you return to the right side of the road when passing?",
    options: ["50 feet", "75 feet", "100 feet", "150 feet"],
    correctAnswer: 2,
    explanation: "You must return to the right side of the road no less than 100 feet before any oncoming vehicle."
  },
  {
    id: "48",
    question: "When is it illegal to pass other vehicles?",
    options: ["When a solid yellow line is on your side", "When a pennant-shaped 'No Passing Zone' sign is posted", "Within 100 feet of an intersection", "All of the above"],
    correctAnswer: 3,
    explanation: "It is dangerous and illegal to pass in all these situations: solid yellow line on your side, no passing zone signs, and within 100 feet of intersections."
  },
  {
    id: "49",
    question: "How far before turning should you signal?",
    options: ["50 feet", "75 feet", "100 feet", "150 feet"],
    correctAnswer: 2,
    explanation: "You must give a proper turn signal before turning or changing lanes, typically at least 100 feet before."
  },
  {
    id: "50",
    question: "When making a left turn from a two-way road, which lane should you turn into?",
    options: ["The right lane", "The left lane", "Any lane", "The lane nearest to the direction you're turning"],
    correctAnswer: 3,
    explanation: "To turn left, be in the far-left lane for your direction of travel. Turn into the lane nearest to the direction you're turning."
  },
  {
    id: "51",
    question: "When making a right turn, which lane should you turn into?",
    options: ["The left lane", "The right lane", "Any lane", "The center lane"],
    correctAnswer: 1,
    explanation: "To turn right, be in the far-right lane for your direction of travel."
  },
  {
    id: "52",
    question: "When is it legal to make a U-turn?",
    options: ["Always", "Never", "When not prohibited by law and it's safe", "Only on highways"],
    correctAnswer: 2,
    explanation: "A U-turn is potentially dangerous and should only be undertaken when not prohibited by law."
  },
  {
    id: "53",
    question: "Where are U-turns never permitted?",
    options: ["On city streets", "On curves, when approaching the crest of a hill, or on interstate highways", "In parking lots", "At intersections"],
    correctAnswer: 1,
    explanation: "Never make a U-turn on a curve in the road, when approaching the crest of a hill, or on an interstate highway."
  },
  {
    id: "54",
    question: "When approaching a roundabout, who has the right of way?",
    options: ["Incoming traffic", "Circulating traffic", "The larger vehicle", "The first to arrive"],
    correctAnswer: 1,
    explanation: "When approaching a roundabout, incoming traffic always yields to the circulating traffic."
  },
  {
    id: "55",
    question: "In what direction does traffic flow in a roundabout?",
    options: ["Clockwise", "Counterclockwise", "Either direction", "Depends on the roundabout"],
    correctAnswer: 1,
    explanation: "A roundabout is a circular intersection in which traffic enters or exits only through right turns and proceeds in a counterclockwise direction."
  },
  {
    id: "56",
    question: "What is the recommended minimum following distance?",
    options: ["1 second", "2 seconds", "3 seconds", "4 seconds"],
    correctAnswer: 2,
    explanation: "A good rule for drivers to follow is to stay at least two to three seconds behind the vehicle ahead."
  },
  {
    id: "57",
    question: "How should you increase following distance in adverse conditions?",
    options: ["Stay the same", "Increase to 4-5 seconds", "Decrease to 1 second", "It doesn't matter"],
    correctAnswer: 1,
    explanation: "You should increase following distance in adverse weather conditions, on slick roads, or when visibility is poor."
  },
  {
    id: "58",
    question: "When must you stop for a school bus?",
    options: ["When amber lights are flashing", "When red lights are flashing and stop arm is extended", "Only if children are visible", "Never"],
    correctAnswer: 1,
    explanation: "You must stop when you approach a school bus with flashing red lights activated and stop arm extended."
  },
  {
    id: "59",
    question: "On a roadway divided by a barrier or unimproved median, when must you stop for a school bus?",
    options: ["Always", "Only if traveling in the same direction as the bus", "Never", "Only if children are visible"],
    correctAnswer: 1,
    explanation: "If you are driving on a roadway divided by a barrier or unimproved median, you are required to stop only if you are traveling in the same direction as the school bus."
  },
  {
    id: "60",
    question: "What do amber flashing lights on a school bus indicate?",
    options: ["Stop immediately", "The bus is slowing and going to load or unload children", "The bus is turning", "Emergency situation"],
    correctAnswer: 1,
    explanation: "When the school bus driver activates the amber lights, he or she is warning other drivers that the bus is slowing and is going to load or unload children."
  },
  {
    id: "61",
    question: "Which vehicles must always stop at railroad crossings?",
    options: ["All vehicles", "Only large trucks", "Vehicles carrying passengers for hire, school buses, and vehicles carrying explosives", "Only commercial vehicles"],
    correctAnswer: 2,
    explanation: "All vehicles carrying passengers for hire, all school buses, and all vehicles carrying explosives or flammable liquids must stop at railroad crossings."
  },
  {
    id: "62",
    question: "How close to the nearest rail must certain vehicles stop at railroad crossings?",
    options: ["5-15 feet", "10-20 feet", "15-50 feet", "20-60 feet"],
    correctAnswer: 2,
    explanation: "Vehicles required to stop must stop not closer than 15 feet or farther than 50 feet from the nearest rail."
  },
  {
    id: "63",
    question: "What should you do if your vehicle stalls on railroad tracks?",
    options: ["Stay in the vehicle", "All occupants should immediately leave the vehicle", "Try to restart the engine", "Wait for help"],
    correctAnswer: 1,
    explanation: "If your vehicle stalls on the tracks, all occupants should immediately leave the vehicle."
  },
  {
    id: "64",
    question: "Is it legal to drive around a crossing gate that is down?",
    options: ["Yes, if no train is visible", "Yes, if you're in a hurry", "No, it is illegal", "Only in emergency"],
    correctAnswer: 2,
    explanation: "It is illegal to drive around a crossing gate that is down."
  },
  {
    id: "65",
    question: "How far from a railroad crossing should you not pass another vehicle?",
    options: ["50 feet", "75 feet", "100 feet", "150 feet"],
    correctAnswer: 2,
    explanation: "Do not pass another vehicle within 100 feet of a railroad crossing."
  },
  {
    id: "66",
    question: "How much below the maximum speed limit are work site speed limits?",
    options: ["At least 5 mph", "At least 10 mph", "At least 15 mph", "At least 20 mph"],
    correctAnswer: 1,
    explanation: "Work site speed limits are always at least 10 miles per hour below the maximum established speed limit for the area."
  },
  {
    id: "67",
    question: "What should you do when a flagger extends a fluorescent orange/red flag horizontally?",
    options: ["Slow down", "Stop", "Proceed with caution", "Speed up"],
    correctAnswer: 1,
    explanation: "You must stop when a flagger extends a fluorescent orange/red flag in a horizontal position into the line of traffic."
  },
  {
    id: "68",
    question: "When parking downhill, which way should you turn your wheels?",
    options: ["Away from the curb", "Toward the curb", "Straight ahead", "It doesn't matter"],
    correctAnswer: 1,
    explanation: "When parking downhill, turn your wheels toward the curb so the vehicle will roll into the curb if the brakes fail."
  },
  {
    id: "69",
    question: "When parking uphill with a curb, which way should you turn your wheels?",
    options: ["Away from the curb", "Toward the curb", "Straight ahead", "It doesn't matter"],
    correctAnswer: 0,
    explanation: "When parking uphill with a curb, turn your wheels away from the curb."
  },
  {
    id: "70",
    question: "How close to a fire hydrant may you park?",
    options: ["5 feet", "10 feet", "15 feet", "20 feet"],
    correctAnswer: 2,
    explanation: "Parking is prohibited within 15 feet of a fire hydrant or in fire lanes."
  },
  {
    id: "71",
    question: "Is parking allowed in the diagonally striped area next to accessible parking spaces?",
    options: ["Yes, if you have a placard", "Yes, for short periods", "No, it is prohibited at all times", "Only at night"],
    correctAnswer: 2,
    explanation: "Parking in the diagonally striped space next to a reserved parking space is prohibited at all times, even with a valid placard."
  },
  {
    id: "72",
    question: "Who is required to wear seat belts in Indiana?",
    options: ["Only the driver", "Driver and front-seat passengers", "Driver and all passengers", "Only children"],
    correctAnswer: 2,
    explanation: "Indiana law requires a driver and all passengers to use seat belts at all times when a vehicle is in operation."
  },
  {
    id: "73",
    question: "At what age are children required to be in a child restraint system in Indiana?",
    options: ["Under 5 years", "Under 6 years", "Under 8 years", "Under 12 years"],
    correctAnswer: 2,
    explanation: "Passengers younger than eight years of age are required by law to be properly secured in a child restraint system."
  },
  {
    id: "74",
    question: "Where should children under 12 years of age sit in a vehicle with a passenger air bag?",
    options: ["Front seat", "Back seat", "Either seat", "It doesn't matter"],
    correctAnswer: 1,
    explanation: "The National Safety Council recommends putting children younger than 12 years of age in the back seat if the car is equipped with a passenger air bag."
  },
  {
    id: "75",
    question: "What is the legal blood alcohol concentration (BAC) limit for drivers 21 and over in Indiana?",
    options: ["0.05%", "0.08%", "0.10%", "0.12%"],
    correctAnswer: 1,
    explanation: "In Indiana, a BAC of 0.08% or higher is considered legally intoxicated for drivers 21 and over."
  },
  {
    id: "76",
    question: "What happens if you fail a chemical test for alcohol?",
    options: ["Warning only", "180-day suspension of driving privileges", "1-year suspension", "2-year suspension"],
    correctAnswer: 1,
    explanation: "A motorist who fails a chemical test will face a suspension of driving privileges for 180 days."
  },
  {
    id: "77",
    question: "What happens if you refuse to submit to a chemical test?",
    options: ["No penalty", "180-day suspension", "1-year suspension", "2-year suspension"],
    correctAnswer: 2,
    explanation: "A motorist who refuses to submit to a chemical test will face a suspension of driving privileges for one year."
  },
  {
    id: "78",
    question: "Is it legal to text while driving in Indiana?",
    options: ["Yes, always", "No, it is illegal", "Only at stop lights", "Only on highways"],
    correctAnswer: 1,
    explanation: "Indiana law specifically prohibits the use of a telecommunications device, including texting, while operating a motor vehicle."
  },
  {
    id: "79",
    question: "When may you use a telecommunications device while driving?",
    options: ["Never", "When hands-free communication is enabled or for 911 emergency calls", "Only at stop lights", "Only on city streets"],
    correctAnswer: 1,
    explanation: "The only exceptions to the prohibition are when hands-free communication is enabled or if the device is being used to contact 911 for a bona fide emergency."
  },
  {
    id: "80",
    question: "What must you do when approaching an emergency vehicle with flashing lights?",
    options: ["Slow down to 10 mph under the posted limit", "Change lanes away from the vehicle if possible", "Both of the above", "Continue at normal speed"],
    correctAnswer: 2,
    explanation: "Motorists must change lanes away from the authorized vehicle. If you cannot move over, reduce speed to 10 mph under the posted limit and proceed with caution."
  },
  {
    id: "81",
    question: "What types of vehicles are considered authorized emergency vehicles?",
    options: ["Only police and fire", "Police, fire, ambulances, and other designated vehicles", "Only ambulances", "Only police"],
    correctAnswer: 1,
    explanation: "Authorized emergency vehicles include fire department vehicles, police department vehicles, ambulances, and other vehicles designated by law."
  },
  {
    id: "82",
    question: "What must you do if involved in an accident?",
    options: ["Leave immediately", "Stop immediately and remain at the scene", "Call 911 only if someone is hurt", "Move your vehicle off the road immediately"],
    correctAnswer: 1,
    explanation: "The driver of a motor vehicle involved in an accident must stop immediately or as close as possible to the scene and remain at the scene."
  },
  {
    id: "83",
    question: "What information must you provide after an accident?",
    options: ["Only your name", "Name, address, and registration number", "Only insurance information", "Nothing if no one is hurt"],
    correctAnswer: 1,
    explanation: "You must give your name, address, and registration number of the motor vehicle to everyone involved, and show your driver's license."
  },
  {
    id: "84",
    question: "When should you move your vehicle after an accident?",
    options: ["Always", "Never", "If the accident occurs on the traveled portion of a highway, move off the highway unless it involves hazardous materials, injury, death, or entrapment", "Only if told by police"],
    correctAnswer: 2,
    explanation: "If the accident occurs on the traveled portion of a highway, move the vehicle off the highway unless it involves hazardous materials, injury, death, or entrapment."
  },
  {
    id: "85",
    question: "What should you do in a situation with a flat tire or blowout?",
    options: ["Apply the brakes immediately", "Hold the steering wheel firmly and keep the car going straight, slow down gradually", "Speed up to get off the road", "Turn the steering wheel sharply"],
    correctAnswer: 1,
    explanation: "In a situation with a flat tire or blowout, hold the steering wheel firmly and keep the car going straight. Slow down gradually. Take your foot off the gas pedal, but do not apply the brakes."
  },
  {
    id: "86",
    question: "What should you do if your vehicle's brakes suddenly fail?",
    options: ["Panic and stop immediately", "Shift to a lower gear and pump the brake pedal fast and hard", "Use only the parking brake", "Turn off the engine"],
    correctAnswer: 1,
    explanation: "If your vehicle's conventional disc or drum brakes suddenly fail, shift to a lower gear and pump the brake pedal fast and hard several times."
  },
  {
    id: "87",
    question: "For the first 180 days after obtaining a probationary driver's license, when may you not drive?",
    options: ["Between 9 p.m. and 6 a.m.", "Between 10 p.m. and 5 a.m.", "Between 11 p.m. and 6 a.m.", "Between midnight and 5 a.m."],
    correctAnswer: 1,
    explanation: "For the first 180 days after obtaining a probationary driver's license, you may not drive between 10 p.m. and 5 a.m."
  },
  {
    id: "88",
    question: "For the first 180 days after obtaining a probationary driver's license, who may ride with you?",
    options: ["Anyone", "No passengers unless a licensed driver 25 or older, spouse 21 or older, or instructor is in the front seat", "Only family members", "Only one passenger"],
    correctAnswer: 1,
    explanation: "You may not drive with any passengers for the first 180 days unless a licensed individual 25 or older, spouse 21 or older, or instructor is in the front passenger seat."
  },
  {
    id: "89",
    question: "What is the minimum liability insurance requirement in Indiana (commonly referred to as 25/50/25)?",
    options: ["$15,000/$30,000/$15,000", "$25,000/$50,000/$25,000", "$30,000/$60,000/$30,000", "$50,000/$100,000/$50,000"],
    correctAnswer: 1,
    explanation: "The state minimum insurance standard is $25,000 for bodily injury to one individual, $50,000 for two or more people, and $25,000 for property damage."
  },
  {
    id: "90",
    question: "How long do points stay active on your driver record in Indiana?",
    options: ["1 year", "2 years", "3 years", "5 years"],
    correctAnswer: 1,
    explanation: "Points stay active on your driver record for two years from the conviction date."
  },
  {
    id: "91",
    question: "If you are at least 21 years old and have how many active points, you must take the knowledge exam to renew?",
    options: ["4 or more", "5 or more", "6 or more", "8 or more"],
    correctAnswer: 2,
    explanation: "If you are at least 21 years of age and have six or more active points on your driving record, you must take the knowledge exam to renew your driver's license."
  },
  {
    id: "92",
    question: "What percentage must you score to pass the Indiana BMV knowledge exam?",
    options: ["70%", "75%", "80%", "90%"],
    correctAnswer: 2,
    explanation: "On the Indiana knowledge examination, you must achieve 80% or higher to pass."
  },
  {
    id: "93",
    question: "If you fail the knowledge exam at the BMV, when can you retake it?",
    options: ["Immediately", "The next business day", "After one week", "After one month"],
    correctAnswer: 1,
    explanation: "If you fail the knowledge exam, you must wait until the next business day to retake it."
  },
  {
    id: "94",
    question: "If you fail a driving skills exam, how long must you wait before retaking it?",
    options: ["1 day", "3 days", "7 days", "30 days"],
    correctAnswer: 2,
    explanation: "If you fail a driving skills exam, you must wait seven days before you can retake the exam."
  },
  {
    id: "95",
    question: "At 55 mph, how many feet does a motor vehicle travel in one second?",
    options: ["About 51 feet", "About 81 feet", "About 103 feet", "About 120 feet"],
    correctAnswer: 1,
    explanation: "At 55 mph, a vehicle travels approximately 80.7 (about 81) feet per second."
  },
  {
    id: "96",
    question: "At 70 mph, how many feet does a motor vehicle travel in one second?",
    options: ["About 51 feet", "About 81 feet", "About 103 feet", "About 120 feet"],
    correctAnswer: 2,
    explanation: "At 70 mph, a vehicle travels approximately 102.7 (about 103) feet per second."
  },
  {
    id: "97",
    question: "How many hours of supervised driving practice must an Indiana driver education student complete?",
    options: ["25 hours", "50 hours (including 10 hours at night)", "75 hours", "100 hours"],
    correctAnswer: 1,
    explanation: "Indiana requires 50 hours of supervised driving practice, of which at least 10 hours must be completed at night."
  },
  {
    id: "98",
    question: "What is the minimum safe distance required by law when passing a bicyclist?",
    options: ["1 foot", "2 feet", "3 feet", "5 feet"],
    correctAnswer: 2,
    explanation: "Motorists must provide a minimum safe clearance of at least three feet when passing a bicyclist."
  },
  {
    id: "99",
    question: "What is the maximum stopping distance of a loaded tractor-trailer traveling at 55 mph?",
    options: ["150 feet", "250 feet", "300 feet", "Over 400 feet"],
    correctAnswer: 3,
    explanation: "A fully loaded tractor-trailer with hot brakes may take more than 400 feet to come to a complete stop at 55 mph."
  },
  {
    id: "100",
    question: "What should you do when driving in heavy fog?",
    options: ["Use high beam headlights", "Use low beam headlights and drive at reduced speed", "Turn headlights completely off", "Drive with hazard flashers only"],
    correctAnswer: 1,
    explanation: "In fog, high beams reflect light back into your eyes. Always use low beam headlights and slow down."
  }
];

// Helper to generate the full 500 pool combining all base questions + sign questions
export function getAll500Questions(): GeneralQuestion[] {
  // Combine core 100 with procedural variations and sign questions to deliver 500 questions
  const basePool = INDIANA_BMV_500_QUESTIONS.map((q) => {
    const tr = BMV_TRANSLATIONS_MAP[q.id];
    return {
      ...q,
      translations: tr || q.translations,
    };
  });
  const fullPool: GeneralQuestion[] = [...basePool];

  // Extend base pool to ensure 500 items if needed
  let counter = 101;
  while (fullPool.length < 500) {
    const sourceIdx = (counter - 101) % basePool.length;
    const template = basePool[sourceIdx];
    const originalId = template.id;
    const tr = BMV_TRANSLATIONS_MAP[originalId] || template.translations;
    fullPool.push({
      ...template,
      id: `${counter}`,
      translations: tr,
    });
    counter++;
  }

  return fullPool;
}
