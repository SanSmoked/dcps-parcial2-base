import DS from 'ember-data';

export default DS.Model.extend({
    firstname: DS.attr('string'),
    lastName: DS.attr('string'),
    username: DS.attr('string'),
    email: DS.attr('string'),
    profilePicture: DS.attr('string'),

    blogs: DS.hasMany('blog-post')

});
