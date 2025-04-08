const axios = require('axios');

const PIXEL_ID = '1185846656343517';
const ACCESS_TOKEN = process.env.META_CONVERSION_API_ACCESS_TOKEN;
const API_VERSION = 'v17.0';

exports.handler = async function(event, context) {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  // Validate required environment variables
  if (!ACCESS_TOKEN) {
    console.error('Meta Conversion API access token is not configured');
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Server configuration error' })
    };
  }

  try {
    const eventData = JSON.parse(event.body);
    
    // Validate required fields
    if (!eventData.event_name) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Event name is required' })
      };
    }

    const baseUrl = `https://graph.facebook.com/${API_VERSION}/${PIXEL_ID}/events`;
    
    const response = await axios.post(
      baseUrl,
      {
        data: [{
          ...eventData,
          event_time: eventData.event_time || Math.floor(Date.now() / 1000),
          action_source: eventData.action_source || 'website'
        }],
        access_token: ACCESS_TOKEN
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    };
  } catch (error) {
    console.error('Error sending conversion event:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Failed to send conversion event',
        details: error.message 
      })
    };
  }
}; 