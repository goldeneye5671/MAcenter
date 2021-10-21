"""Create all tables without relationships

Revision ID: f03cdc24d605
Revises: 
Create Date: 2021-10-20 20:42:28.497404

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f03cdc24d605'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('following_joins',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('studio_id', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('martial_art_ranks',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=15), nullable=True),
    sa.Column('rank_number', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('martial_arts',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=150), nullable=False),
    sa.Column('creation_date', sa.DateTime(), nullable=False),
    sa.Column('art_type', sa.String(length=200), nullable=True),
    sa.Column('bio', sa.Text(), nullable=False),
    sa.Column('difficulty_level', sa.Integer(), nullable=False),
    sa.Column('region', sa.String(length=50), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('studio_events',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('studio_id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=256), nullable=False),
    sa.Column('description', sa.Text(), nullable=False),
    sa.Column('event_date', sa.DateTime(), nullable=False),
    sa.Column('location', sa.Text(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('studio_photos',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('studio_id', sa.Integer(), nullable=False),
    sa.Column('photo_url', sa.Text(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('studio_reviews',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('studio_id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=100), nullable=False),
    sa.Column('content', sa.Text(), nullable=False),
    sa.Column('rating', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('studio_schedules',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('studio_id', sa.Integer(), nullable=False),
    sa.Column('class_name', sa.String(length=256), nullable=False),
    sa.Column('class_day', sa.String(length=9), nullable=False),
    sa.Column('start_time', sa.DateTime(), nullable=False),
    sa.Column('end_time', sa.DateTime(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('studios',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=256), nullable=False),
    sa.Column('martial_art_id', sa.Integer(), nullable=False),
    sa.Column('federation_id', sa.Integer(), nullable=False),
    sa.Column('address', sa.Text(), nullable=False),
    sa.Column('owner_id', sa.Integer(), nullable=False),
    sa.Column('phone_contact', sa.Integer(), nullable=False),
    sa.Column('email_contact', sa.String(length=30), nullable=False),
    sa.Column('studio_bio', sa.Text(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user_photos',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('photo_url', sa.Text(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=40), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('users')
    op.drop_table('user_photos')
    op.drop_table('studios')
    op.drop_table('studio_schedules')
    op.drop_table('studio_reviews')
    op.drop_table('studio_photos')
    op.drop_table('studio_events')
    op.drop_table('martial_arts')
    op.drop_table('martial_art_ranks')
    op.drop_table('following_joins')
    # ### end Alembic commands ###
