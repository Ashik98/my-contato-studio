import blog from './blog'
import video from './video'
import user from './user'
import page from './page'
import settings from './settings'
import imageAsset from './imageAsset'
import documentUpload from './documentUpload' 

import hero from './slices/hero'
import textBlock from './slices/textBlock'
import imageGallery from './slices/imageGallery'
import ctaBanner from './slices/ctaBanner'
import featureList from './slices/featureList'
import testimonial from './slices/testimonial'
import videoEmbed from './slices/videoEmbed'
import authorBlock from './slices/authorBlock'
import blogList from './slices/blogList'
import newsletterSignup from './slices/newsletterSignup'

export const schemaTypes = [
   //documents 
    blog, video, user, page, settings,imageAsset,documentUpload,
 // slices
 hero, textBlock, imageGallery, ctaBanner, featureList,
 testimonial, videoEmbed, authorBlock, blogList, newsletterSignup

]

