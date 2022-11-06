import feedApi from '@/api/feed'

const state = {
  data: null,
  isLoading: false,
  error: null,
}

export const mutationsTypes = {
  getFeedStart: '[feed] Get feed start',
  getFeedSuccess: '[feed] Get feed success',
  getFeedFailure: '[feed] Get feed failure',
}
