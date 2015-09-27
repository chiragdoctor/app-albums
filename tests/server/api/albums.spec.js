'use strict'

var api = require('../api');
var expect = require('chai').expect;
var config = require('config');
var passportStub = require('passport-stub')
var request = require('supertest');
passportStub.install(api);
var req = request(api);
var _ = require('lodash');
var testUser = require('../fixtures/user.json');
var testAlbums = require('../fixtures/albums.json');
var db = require('../../../services/db');
db.connect();
var User = require('../../../models/user');


function getUniqAlbums(albums) {
    return _.uniq(albums, function (album) {
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

        User.findOne({'spotify.id': testUser.spotify.id}, function (err, user) {
            req.get('/oauth/refresh_token?refresh_token=' + user.spotify.refresh_token + '&client_id=' + config.spotify.client_id + '&client_secret=' + config.spotify.client_secret)
                .expect(function (response) {
                    testUser.spotify.access_token = response.body.access_token;
                    passportStub.login(testUser);
                })
                .end(done);

        });
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
