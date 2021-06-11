import React from 'react'
import './DetailStory.css'
import StoryImage from '../resources/Chef.jpg'

function DetailStory() {
    return (
        <div className="detail-story">
            <div className="detail-story-container">
            <h1> Our Story</h1>
            <img src={StoryImage}/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis sodales sapien, tristique bibendum turpis. Cras efficitur ipsum et lobortis sodales. Mauris tincidunt urna metus, vitae porttitor enim tempor ac. Maecenas elementum, sem eu mattis vestibulum, leo metus porta ante, ac vehicula ex nunc in dolor. Phasellus sit amet nunc ac mauris facilisis vulputate a id sem. Maecenas nec metus ut est luctus pellentesque vitae venenatis felis. In hac habitasse platea dictumst. Curabitur dapibus orci velit, et efficitur nulla euismod at. Cras lobortis, eros a varius aliquet, ex est euismod lorem, vitae iaculis magna odio sit amet odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus ut lacus ultrices, maximus tellus vel, pretium dolor. In scelerisque dapibus nunc, id lobortis tellus mollis sed. Phasellus mauris mauris, auctor ut ex ac, ultrices mattis augue. Nam feugiat elit ex. Morbi feugiat libero vel tempor accumsan.

Praesent iaculis posuere semper. Cras egestas purus massa, id dignissim dui finibus non. Aenean rhoncus tempus justo eu ultrices. Nulla vel tortor luctus, sollicitudin urna eu, tristique arcu. Maecenas condimentum dolor eget mauris auctor aliquam. Vestibulum rhoncus lectus bibendum, ullamcorper mauris rutrum, sodales leo. Aliquam maximus orci eget lacus volutpat, faucibus eleifend sem accumsan. Maecenas consequat, nulla at malesuada rhoncus, dolor libero eleifend nibh, in aliquam neque velit vel felis. Donec hendrerit, enim nec fringilla tempor, massa lectus ullamcorper massa, et commodo ex eros ut lacus. Integer vel turpis euismod, cursus metus eget, volutpat eros. Mauris dapibus pulvinar dui. Nulla condimentum elementum metus, in mattis massa tempus sed. Suspendisse pulvinar efficitur metus sed posuere. Donec ut nulla at felis molestie lobortis vitae vehicula nisi. Integer vel erat vitae massa viverra hendrerit. Suspendisse lacus metus, vulputate quis velit vel, consequat congue mi.</p>
            </div>
        </div>
    )
}

export default DetailStory
