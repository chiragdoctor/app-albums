'use strict'

var api = require('../api');
var expect = require('chai').expect;
var config = require('config');
var passportStub = require('passport-stub')
var request = require('supertest');
passportStub.install(api);
var req = request(api);

require('../../../services/db').connect();
var User = require('../../../models/user');
var _ = require('lodash');

var testUser = require('../fixtures/user.json');
var testAlbums = require('../fixtures/albums.json');


function getUniqAlbums(albums){
    return _.uniq(albums, function (album){
        return album.name;
    });
}

describe('User not authenticated', function () {
    describe('GET /api/albums', function () {
        it('should return 302', function (done) {
            req.get('/api/albums')
                .expect(302)
                .end(done);
        })
    });
});


describe('Albums test', function () {
    beforeEach(function (done) {
        User.findOne({'spotify.id': testUser.user1.id}, function (err, user) {
            if (err) {
                console.error(err);
                return done(err);
            }
            passportStub.login(user);
            done();
        })
    });

    describe('GET /api/albums', function () {
        it('should return 200', function (done) {
            req.get('/api/albums')
                .expect(200)
                .end(done);
        });

        it('should return no duplicate albums', function (done) {
            req.get('/api/albums')
                .expect(function (response) {
                    var uniqAlbums = getUniqAlbums(testAlbums);
                    !expect(response.body.albums.length).to.equal(uniqAlbums.length);
                })
                .end(done);
        });
    });
});
