from django.test import TestCase
from .models import User, Team, Activity, Leaderboard, Workout

class UserModelTest(TestCase):
    def test_create_user(self):
        user = User(username='testuser', email='test@example.com', password='testpass')
        self.assertEqual(user.username, 'testuser')

class TeamModelTest(TestCase):
    def test_create_team(self):
        team = Team(name='Test Team')
        self.assertEqual(team.name, 'Test Team')

class ActivityModelTest(TestCase):
    def test_create_activity(self):
        user = User(username='testuser', email='test@example.com', password='testpass')
        activity = Activity(user=user, activity_type='Running', duration=60)
        self.assertEqual(activity.activity_type, 'Running')

class LeaderboardModelTest(TestCase):
    def test_create_leaderboard(self):
        user = User(username='testuser', email='test@example.com', password='testpass')
        leaderboard = Leaderboard(user=user, score=100)
        self.assertEqual(leaderboard.score, 100)

class WorkoutModelTest(TestCase):
    def test_create_workout(self):
        workout = Workout(name='Test Workout', description='Test Desc')
        self.assertEqual(workout.name, 'Test Workout')
