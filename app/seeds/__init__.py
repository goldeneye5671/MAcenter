from flask.cli import AppGroup
from .user_seeder import seed_users, undo_users
from .studio_seeder import seed_studios, undo_studios
from .studio_events_seeder import seed_studio_events, undo_studio_events
from .studio_reviews_seeder import seed_reviews, undo_studio_reviews
from .studio_schedule_seeder import seed_studio_schedules, undo_studio_schedule
from .martial_art_seeder import seed_martial_arts, undo_martial_arts
from .martial_art_rank_seeder import seed_martial_art_ranks, undo_martial_arts_ranks

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_martial_arts()
    seed_martial_art_ranks()
    seed_studios()
    seed_users()
    seed_studio_events()
    seed_studio_schedules()
    seed_reviews()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_studios()
    undo_studio_events()
    undo_studio_schedule()
    undo_studio_reviews()
    # Add other undo functions here
